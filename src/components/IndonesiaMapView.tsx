import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Flame, 
  Activity, 
  Waves, 
  Radio, 
  Search, 
  X
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import { getMapMarkers } from '../data/mapData';
import { MapMarker } from '../types/disaster';
import { soundEngine } from '../audio/soundEngine';
import { useLanguage } from '../context/LanguageContext';

interface IndonesiaMapViewProps {
  onNavigate?: (view: any) => void;
}

// Tile layers definitions for Google Maps view
const TILE_LAYERS = {
  google_satellite: {
    name_id: 'Satelit Google Maps',
    name_en: 'Google Maps Satellite',
    url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
    attribution: '&copy; Google Maps Satellite Data'
  },
  google_terrain: {
    name_id: 'Google Maps Peta Jalan',
    name_en: 'Google Maps Street Map',
    url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    attribution: '&copy; Google Maps'
  }
};

// Helper component to auto-recenter map when selecting a marker
const MapRecenter: React.FC<{ lat: number; lng: number }> = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], Math.max(map.getZoom(), 6), { duration: 1.2 });
  }, [lat, lng, map]);
  return null;
};

// Custom Leaflet HTML Marker Icons
const createCustomIcon = (type: string, isSelected: boolean) => {
  let bgGradient = 'linear-gradient(135deg, #06b6d4, #0891b2)';
  let borderColor = '#22d3ee';
  let iconHtml = '⚡';

  if (type === 'earthquake') {
    bgGradient = 'linear-gradient(135deg, #10b981, #059669)';
    borderColor = '#34d399';
    iconHtml = '📡';
  } else if (type === 'volcano') {
    bgGradient = 'linear-gradient(135deg, #f43f5e, #e11d48)';
    borderColor = '#fda4af';
    iconHtml = '🌋';
  } else if (type === 'fault') {
    bgGradient = 'linear-gradient(135deg, #f59e0b, #d97706)';
    borderColor = '#fde047';
    iconHtml = '⚡';
  } else if (type === 'subduction') {
    bgGradient = 'linear-gradient(135deg, #2563eb, #1d4ed8)';
    borderColor = '#93c5fd';
    iconHtml = '🌊';
  }

  const size = isSelected ? 34 : 26;

  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `
      <div style="
        position: relative;
        width: ${size}px;
        height: ${size}px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${bgGradient};
        border: ${isSelected ? '3px solid #ffffff' : `2px solid ${borderColor}`};
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.5);
        transform: translate(-50%, -50%) scale(${isSelected ? 1.2 : 1});
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        font-size: ${size > 30 ? '14px' : '11px'};
        z-index: ${isSelected ? 1000 : 500};
      ">
        <span>${iconHtml}</span>
      </div>
    `,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });
};

export const IndonesiaMapView: React.FC<IndonesiaMapViewProps> = () => {
  const { language, t } = useLanguage();
  const staticMarkers = getMapMarkers(language);
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(staticMarkers[0]);
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'earthquake' | 'volcano' | 'subduction' | 'fault'>('ALL');
  const [selectedTileStyle, setSelectedTileStyle] = useState<keyof typeof TILE_LAYERS>('google_satellite');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bmkgLiveMarkers, setBmkgLiveMarkers] = useState<MapMarker[]>([]);
  const [lastBmkgSync, setLastBmkgSync] = useState<string>('');

  // Tectonic Trench Lines for Real Leaflet Overlay (PUSGEN BMKG Data)
  const sundaMegathrustCoords: [number, number][] = [
    [6.0, 93.0],
    [4.5, 94.5],
    [2.5, 96.5],
    [0.5, 98.0],
    [-2.0, 99.8],
    [-4.5, 102.2],
    [-6.5, 105.0],
    [-8.5, 108.5],
    [-9.5, 112.5],
    [-10.2, 116.5],
    [-10.5, 122.0],
    [-10.0, 127.0]
  ];

  const northSulawesiSubductionCoords: [number, number][] = [
    [2.0, 120.0],
    [3.2, 123.0],
    [4.5, 126.0]
  ];

  const northPapuaSubductionCoords: [number, number][] = [
    [0.5, 134.0],
    [-0.5, 137.5],
    [-2.2, 141.0]
  ];

  const floresBackArcThrustCoords: [number, number][] = [
    [-7.8, 115.0],
    [-7.9, 118.5],
    [-8.1, 121.5],
    [-8.2, 124.0]
  ];

  const greatSumatranFaultCoords: [number, number][] = [
    [5.8, 95.3],
    [4.5, 96.5],
    [3.2, 97.5],
    [2.0, 98.9],
    [0.5, 100.1],
    [-0.8, 100.8],
    [-2.2, 101.8],
    [-3.8, 102.8],
    [-5.2, 104.2],
    [-5.8, 104.8]
  ];

  const baribisKendengFaultCoords: [number, number][] = [
    [-6.65, 106.8],
    [-6.75, 107.8],
    [-6.85, 108.5],
    [-7.1, 110.5],
    [-7.3, 112.5]
  ];

  const paluKoroMatanoFaultCoords: [number, number][] = [
    [1.2, 119.8],
    [-0.9, 119.85],
    [-2.2, 120.4],
    [-2.8, 121.3],
    [-3.2, 122.2]
  ];

  const sorongFaultCoords: [number, number][] = [
    [-1.0, 137.0],
    [-1.2, 134.0],
    [-1.5, 131.0],
    [-1.8, 127.5],
    [-1.9, 125.0]
  ];

  // Fetch Live BMKG TEWS Earthquake Data
  useEffect(() => {
    const fetchBmkgData = async () => {
      try {
        const res = await fetch('https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json');
        if (res.ok) {
          const json = await res.json();
          const gempaList = json?.Infogempa?.gempa || [];
          
          const liveList: MapMarker[] = gempaList.slice(0, 15).map((g: any, i: number) => {
            const rawCoords = g.Coordinates?.split(',') || [];
            const lat = parseFloat(rawCoords[0]) || 0;
            const lng = parseFloat(rawCoords[1]) || 0;

            const isEn = language === 'en';
            const desc = isEn 
              ? `Epicenter depth ${g.Kedalaman}. ${g.Potensi}`
              : `Pusat gempa kedalaman ${g.Kedalaman}. ${g.Potensi}`;
            
            const details = isEn
              ? `Official automated BMKG TEWS data: Event time ${g.Tanggal} ${g.Jam} WIB. Location: ${g.Lintang} - ${g.Bujur}, Depth: ${g.Kedalaman}. Felt intensity: ${g.Dirasakan || 'Under seismic instrument evaluation'}.`
              : `Data resmi otomatis BMKG TEWS: Waktu gempa ${g.Tanggal} ${g.Jam} WIB. Lokasi: ${g.Lintang} - ${g.Bujur}, Kedalaman: ${g.Kedalaman}. Dirasakan: ${g.Dirasakan || 'Dalam evaluasi instrumen seismograf'}.`;

            return {
              id: `bmkg_live_${i}`,
              title: isEn ? `Earthquake M ${g.Magnitude} - ${g.Wilayah}` : `Gempa M ${g.Magnitude} - ${g.Wilayah}`,
              type: 'earthquake',
              location: `${g.Wilayah} (${g.Tanggal} ${g.Jam})`,
              lat,
              lng,
              description: desc,
              riskLevel: parseFloat(g.Magnitude) >= 6.0 ? 'Ekstrem' : parseFloat(g.Magnitude) >= 5.0 ? 'Tinggi' : 'Waspada',
              details: details
            };
          });

          setBmkgLiveMarkers(liveList);
          const now = new Date();
          setLastBmkgSync(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
        }
      } catch (err) {
        console.warn('Gagal memuat API Live BMKG, beralih ke data seismik katalog terintegrasi.', err);
      }
    };

    fetchBmkgData();
    const timer = setInterval(fetchBmkgData, 60000);
    return () => clearInterval(timer);
  }, [language]);

  const allCombinedMarkers = [...bmkgLiveMarkers, ...staticMarkers];

  const filteredMarkers = allCombinedMarkers.filter(m => {
    const matchesCategory = activeFilter === 'ALL' ? true : m.type === activeFilter;
    const matchesQuery = searchQuery.trim() === '' || 
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      m.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const volcanoCount = allCombinedMarkers.filter(m => m.type === 'volcano').length;

  const getMarkerIconHeader = (type: string) => {
    switch (type) {
      case 'earthquake': return <Radio className="w-4 h-4 text-emerald-400" />;
      case 'volcano': return <Flame className="w-4 h-4 text-rose-400" />;
      case 'subduction': return <Waves className="w-4 h-4 text-blue-400" />;
      case 'fault': return <Activity className="w-4 h-4 text-amber-400" />;
      default: return <MapPin className="w-4 h-4 text-white" />;
    }
  };

  const getRiskBadgeText = (risk: string) => {
    if (language === 'en') {
      if (risk === 'Ekstrem') return t.mapRiskExtreme;
      if (risk === 'Sangat Tinggi') return t.mapRiskVeryHigh;
      if (risk === 'Tinggi') return t.mapRiskHigh;
      return 'Advisory';
    }
    return risk;
  };

  return (
    <section className="relative z-20 w-full h-[100dvh] pt-16 sm:pt-20 pb-2.5 px-3 sm:px-6 flex flex-col justify-between overflow-hidden animate-in fade-in duration-300">
      
      {/* Compact Top Header Bar */}
      <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <h1 className="text-lg sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <span>{t.mapHeaderTitle}</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
          </h1>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <span className="text-xs text-zinc-400 hidden md:inline">
            {t.mapHeaderSubtitle}
          </span>
        </div>

        {/* Sync Status Badge */}
        {lastBmkgSync && (
          <div className="px-3 py-1 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 font-mono flex items-center gap-2 self-start sm:self-auto shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{language === 'en' ? 'BMKG Telemetry Sync:' : 'Sync BMKG:'} <strong className="text-white">{lastBmkgSync} WIB</strong></span>
          </div>
        )}
      </div>

      {/* Main Map Container Card */}
      <div className="flex-1 w-full relative min-h-0 bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl flex flex-col">
        
        {/* Filters, Search Box & Map Tile Switcher Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between p-2.5 sm:px-4 sm:py-2 bg-zinc-900 border-b border-zinc-800 gap-2 shrink-0">
          
          {/* Disaster Type Filter Tabs */}
          <div className="flex items-center overflow-x-auto custom-scrollbar gap-1.5 pb-1 lg:pb-0">
            {[
              { id: 'ALL', label: t.mapFilterAll },
              { id: 'earthquake', label: `${t.mapFilterLiveBmkg} (${bmkgLiveMarkers.length})`, icon: <Radio className="w-3.5 h-3.5 text-emerald-400" /> },
              { id: 'volcano', label: `${t.mapFilterVolcano} (${volcanoCount})`, icon: <Flame className="w-3.5 h-3.5 text-rose-400" /> },
              { id: 'subduction', label: t.mapFilterSubduction, icon: <Waves className="w-3.5 h-3.5 text-blue-400" /> },
              { id: 'fault', label: t.mapFilterFault, icon: <Activity className="w-3.5 h-3.5 text-amber-400" /> }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  soundEngine.playClick();
                  setActiveFilter(f.id as any);
                }}
                className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                  activeFilter === f.id
                    ? 'bg-emerald-600 text-white border border-emerald-500 shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800 border border-transparent'
                }`}
              >
                {f.icon}
                <span>{f.label}</span>
              </button>
            ))}
          </div>

          {/* Search Input & Tile Layer Switcher */}
          <div className="flex items-center gap-2">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-56">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'en' ? "Search location, volcano..." : "Cari lokasi, gunung..."}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl pl-8 pr-3 py-1 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Map Style Switcher */}
            <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-xl p-0.5">
              {(Object.keys(TILE_LAYERS) as Array<keyof typeof TILE_LAYERS>).map((layerKey) => (
                <button
                  key={layerKey}
                  onClick={() => {
                    soundEngine.playClick();
                    setSelectedTileStyle(layerKey);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                    selectedTileStyle === layerKey
                      ? 'bg-zinc-800 text-emerald-400 shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {language === 'en' ? (layerKey === 'google_satellite' ? 'Satellite' : 'Roadmap') : (layerKey === 'google_satellite' ? 'Satelit' : 'Peta')}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Leaflet Map Interactive Viewport */}
        <div className="flex-1 w-full h-full relative min-h-0">
          <MapContainer
            center={[-2.5, 118.0]}
            zoom={5}
            minZoom={4}
            maxZoom={12}
            scrollWheelZoom={true}
            className="w-full h-full z-0 bg-[#060d17]"
          >
            <TileLayer
              attribution={TILE_LAYERS[selectedTileStyle].attribution}
              url={TILE_LAYERS[selectedTileStyle].url}
              subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
              maxZoom={20}
            />

            {/* Recenter Viewport Controller */}
            {selectedMarker && (
              <MapRecenter lat={selectedMarker.lat} lng={selectedMarker.lng} />
            )}

            {/* 1. TECTONIC SUBDUCTION / MEGATHRUST TRENCH LINES (CYAN/BLUE) */}
            {(activeFilter === 'ALL' || activeFilter === 'subduction') && (
              <>
                <Polyline 
                  positions={sundaMegathrustCoords}
                  pathOptions={{ 
                    color: '#06b6d4', 
                    weight: 3.5, 
                    dashArray: '8, 8',
                    opacity: 0.85 
                  }}
                />
                <Polyline 
                  positions={northSulawesiSubductionCoords}
                  pathOptions={{ color: '#0ea5e9', weight: 3, dashArray: '6, 6', opacity: 0.85 }}
                />
                <Polyline 
                  positions={northPapuaSubductionCoords}
                  pathOptions={{ color: '#0ea5e9', weight: 3, dashArray: '6, 6', opacity: 0.85 }}
                />
                <Polyline 
                  positions={floresBackArcThrustCoords}
                  pathOptions={{ color: '#60a5fa', weight: 3, dashArray: '6, 6', opacity: 0.85 }}
                />
              </>
            )}

            {/* 2. ACTIVE CONTINENTAL FAULT LINES (AMBER/ORANGE) */}
            {(activeFilter === 'ALL' || activeFilter === 'fault') && (
              <>
                <Polyline 
                  positions={greatSumatranFaultCoords}
                  pathOptions={{ color: '#f59e0b', weight: 3, opacity: 0.9 }}
                />
                <Polyline 
                  positions={baribisKendengFaultCoords}
                  pathOptions={{ color: '#f59e0b', weight: 2.5, opacity: 0.9 }}
                />
                <Polyline 
                  positions={paluKoroMatanoFaultCoords}
                  pathOptions={{ color: '#ea580c', weight: 3, opacity: 0.9 }}
                />
                <Polyline 
                  positions={sorongFaultCoords}
                  pathOptions={{ color: '#f59e0b', weight: 3, opacity: 0.9 }}
                />
              </>
            )}

            {/* 3. DISASTER MARKERS */}
            {filteredMarkers.map((marker) => {
              const isSelected = selectedMarker?.id === marker.id;
              return (
                <Marker
                  key={marker.id}
                  position={[marker.lat, marker.lng]}
                  icon={createCustomIcon(marker.type, isSelected)}
                  eventHandlers={{
                    click: () => {
                      soundEngine.playClick();
                      setSelectedMarker(marker);
                    }
                  }}
                >
                  <Popup className="custom-leaflet-popup">
                    <div className="p-2 text-zinc-900">
                      <div className="text-xs font-extrabold">{marker.title}</div>
                      <div className="text-[11px] text-zinc-600 mb-1">{marker.location}</div>
                      <div className="text-[10px] bg-zinc-100 p-1.5 rounded">{marker.description}</div>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>

          {/* Floating Selected Location Detail Card */}
          {selectedMarker && (
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-auto sm:right-4 sm:top-4 sm:left-auto sm:w-96 max-h-[75%] overflow-y-auto custom-scrollbar z-[1000] bg-zinc-950/95 border border-zinc-700 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-in fade-in">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-700">
                    {getMarkerIconHeader(selectedMarker.type)}
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 block">
                      {selectedMarker.type === 'earthquake' 
                        ? (language === 'en' ? 'Live BMKG Earthquake' : 'Live Gempa BMKG')
                        : selectedMarker.type === 'volcano' 
                        ? (language === 'en' ? 'Active Volcano' : 'Gunung Api Aktif')
                        : selectedMarker.type === 'subduction' 
                        ? (language === 'en' ? 'Megathrust Subduction' : 'Zona Megathrust')
                        : (language === 'en' ? 'Active Onshore Fault' : 'Sesar Patahan Aktif')}
                    </span>
                    <h4 className="text-sm sm:text-base font-black text-white leading-tight">
                      {selectedMarker.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${
                    selectedMarker.riskLevel === 'Ekstrem' ? 'bg-rose-950 text-white border-rose-600' :
                    selectedMarker.riskLevel === 'Sangat Tinggi' ? 'bg-orange-950 text-white border-orange-600' :
                    selectedMarker.riskLevel === 'Tinggi' ? 'bg-amber-950 text-amber-200 border-amber-600' :
                    'bg-emerald-950 text-emerald-200 border-emerald-600'
                  }`}>
                    {getRiskBadgeText(selectedMarker.riskLevel)}
                  </span>
                  <button
                    onClick={() => setSelectedMarker(null)}
                    className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                    title={language === 'en' ? "Close Details" : "Tutup Detail"}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="text-xs text-zinc-300 bg-zinc-900 p-2.5 rounded-xl border border-zinc-800 mb-2.5 leading-relaxed">
                {selectedMarker.description}
              </div>

              <div className="text-[11px] text-zinc-400 space-y-1 border-t border-zinc-800 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">{language === 'en' ? 'Geographic Coordinates:' : 'Koordinat Geografis:'}</span>
                  <span className="font-mono text-emerald-300 font-bold">{selectedMarker.lat.toFixed(2)}°, {selectedMarker.lng.toFixed(2)}°</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-zinc-500 shrink-0">{language === 'en' ? 'Region / Location:' : 'Wilayah / Daerah:'}</span>
                  <span className="text-right text-zinc-200 font-medium">{selectedMarker.location}</span>
                </div>
                {selectedMarker.details && (
                  <div className="mt-1.5 text-[11px] text-amber-200 bg-zinc-900 p-2 rounded-xl border border-zinc-800 leading-snug">
                    {selectedMarker.details}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quick Legend Overlay Box (Bottom Left) */}
          <div className="hidden sm:flex absolute bottom-4 left-4 z-[1000] bg-zinc-950/90 border border-zinc-800 rounded-xl px-3 py-2 shadow-2xl backdrop-blur-md flex-col gap-1 text-[11px] text-zinc-300">
            <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{t.mapLegendTitle}</div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-0.5 bg-sky-400 inline-block border-t border-dashed border-sky-300" />
              <span>{t.mapLegendSubduction}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-0.5 bg-amber-400 inline-block" />
              <span>{t.mapLegendFault}</span>
            </div>
            <div className="flex items-center gap-3 mt-0.5 pt-0.5 border-t border-zinc-800 text-[10px]">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500" /> {t.mapLegendVolcano}</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400" /> {t.mapLegendBmkg}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Single Line Footer Note */}
      <div className="text-center text-[10px] text-zinc-500 mt-1.5 shrink-0">
        © 2026 RAWAN ({language === 'en' ? 'Indonesian Youth Disaster Anticipation & Awareness' : 'Ruang Antisipasi Waspada Anak Nusantara'})
      </div>
    </section>
  );
};

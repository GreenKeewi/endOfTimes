export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface EvidencePoint {
  label: string;
  value: string;
  description: string;
  trend: 'up' | 'down' | 'stable';
}

export interface DetailedInfo {
  intro: string;
  timeline?: TimelineEvent[];
  evidence?: EvidencePoint[];
}

export interface MetricItem {
  id: string;
  name: string;
  percent: number;
  description?: string;
  iconType: 'religion' | 'science' | 'fire' | 'water' | 'tech' | 'asteroid' | 'bio' | 'earth' | 'warning';
  details: DetailedInfo;
}

export interface AppConfig {
  globalCompletion: number;
  religions: MetricItem[];
  science: MetricItem[];
}
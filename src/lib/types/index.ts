export type TabItem = {
  index: number;
  label: string;
  role: string;
  companyName: string;
  date: { from: string; to: string };
  description: string[];
};

export interface ITabContext {
  setSelectedTab: React.Dispatch<React.SetStateAction<TabItem>>;
  selectedTab: TabItem;
  tablist: TabItem[];
}

export type Work = {
  id: string;
  title: string;
  url: string;
  slug: string;
  tagline: string;
  banner_img: string;
  github_url: string;
};

export type Project = Work;

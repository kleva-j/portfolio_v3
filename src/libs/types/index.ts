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

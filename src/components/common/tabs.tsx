import React, { useState, ReactNode } from 'react';

type TabProps = {
  label: string;
  onClick: (label: string) => void;
  isActive: boolean;
};

const Tab: React.FC<TabProps> = ({ label, onClick, isActive }) => {
  return (
    <button
      style={{
        padding: '10px 20px',
        cursor: 'pointer',
        borderBottom: isActive ? '2px solid blue' : '2px solid transparent',
        backgroundColor: isActive ? '#f0f0f0' : '#fff',
      }}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

type TabsProps = {
  children: ReactNode;
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const childArray = React.Children.toArray(children);
  const [activeTab, setActiveTab] = useState<string>(
    React.isValidElement(childArray[0]) ? childArray[0].props.label : ''
  );

  const handleTabClick = (label: string) => {
    setActiveTab(label);
  };

  return (
    <div>
      <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
        {childArray.map((child) => {
          if (React.isValidElement(child)) {
            return (
              <Tab
                key={child.props.label}
                label={child.props.label}
                onClick={handleTabClick}
                isActive={child.props.label === activeTab}
              />
            );
          }
          return null;
        })}
      </div>
      <div style={{ padding: '20px' }}>
        {childArray.map((child) => {
          if (React.isValidElement(child) && child.props.label === activeTab) {
            return child.props.children;
          }
          return null;
        })}
      </div>
    </div>
  );
};

type TabPanelProps = {
  label: string;
  children: ReactNode;
};

const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
  return <div>{children}</div>;
};

export { Tabs, TabPanel };

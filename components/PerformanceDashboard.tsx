import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  lighthouseScore: number;
  bundleSize: string;
  uptime: number;
}

/**
 * PerformanceDashboard Component
 * Displays simulated performance metrics for the portfolio
 */
export const PerformanceDashboard: React.FC = () => {
  // State for performance metrics
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    lighthouseScore: 0,
    bundleSize: '0 KB',
    uptime: 0
  });

  /**
   * Effect to simulate performance metrics updates
   */
  useEffect(() => {
    // Simulate performance metrics
    const simulateMetrics = () => {
      setMetrics({
        loadTime: Math.random() * 1000 + 500, // 500-1500ms
        lighthouseScore: Math.floor(Math.random() * 20) + 80, // 80-100
        bundleSize: `${Math.floor(Math.random() * 200) + 100} KB`,
        uptime: Math.floor(Math.random() * 10) + 95 // 95-105%
      });
    };

    simulateMetrics();
    const interval = setInterval(simulateMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  // Metrics data for display
  const metricsData = [
    {
      label: 'Load Time',
      value: `${Math.round(metrics.loadTime)}ms`,
      color: metrics.loadTime < 1000 ? '#10b981' : '#f59e0b',
      icon: '⚡'
    },
    {
      label: 'Lighthouse Score',
      value: `${metrics.lighthouseScore}/100`,
      color: metrics.lighthouseScore > 90 ? '#10b981' : '#f59e0b',
      icon: '📊'
    },
    {
      label: 'Bundle Size',
      value: metrics.bundleSize,
      color: '#3b82f6',
      icon: '📦'
    },
    {
      label: 'Uptime',
      value: `${metrics.uptime}%`,
      color: '#10b981',
      icon: '🟢'
    }
  ];

  return (
    <motion.div
      className="performance-dashboard"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: 'var(--background-two)',
        borderRadius: '12px',
        padding: '20px',
        margin: '20px 0',
        border: '1px solid var(--border-one)'
      }}
    >
      {/* Dashboard heading */}
      <h3 style={{
        textAlign: 'center',
        marginBottom: '20px',
        color: 'var(--main-text-color)',
        fontSize: '18px',
        fontWeight: '600'
      }}>
        🚀 Performance Metrics
      </h3>
      
      {/* Metrics grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '15px'
      }}>
        {metricsData.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            style={{
              background: 'var(--secondary-background-one)',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center',
              border: `2px solid ${metric.color}20`
            }}
          >
            {/* Metric icon */}
            <div style={{ fontSize: '24px', marginBottom: '5px' }}>
              {metric.icon}
            </div>
            
            {/* Metric value */}
            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              color: 'var(--main-text-color)',
              marginBottom: '5px'
            }}>
              {metric.value}
            </div>
            
            {/* Metric label */}
            <div style={{
              fontSize: '12px',
              color: 'var(--text-color-two)'
            }}>
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
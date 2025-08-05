import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ReactECharts from 'echarts-for-react';
import { format, subDays } from 'date-fns';

const { 
  FiArrowLeft, FiDownload, FiCalendar, FiUsers, 
  FiDollarSign, FiBarChart2, FiTrendingUp, FiFilter
} = FiIcons;

const AdminAnalytics = () => {
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState('30d');

  // Generate dates for the last 30 days
  const generateDates = (days) => {
    return Array.from({ length: days }).map((_, i) => {
      return format(subDays(new Date(), days - 1 - i), 'MMM dd');
    });
  };

  // Generate random data for enrollment chart
  const generateEnrollmentData = (days) => {
    return Array.from({ length: days }).map(() => {
      return Math.floor(Math.random() * 10) + 1;
    });
  };

  // Generate random data for revenue chart
  const generateRevenueData = (days) => {
    return Array.from({ length: days }).map(() => {
      return Math.floor(Math.random() * 5000) + 500;
    });
  };

  // Generate random data for completion chart
  const generateCompletionData = (days) => {
    return Array.from({ length: days }).map(() => {
      return Math.floor(Math.random() * 8) + 1;
    });
  };

  const dates30d = generateDates(30);
  const dates90d = generateDates(90);

  const enrollmentData30d = generateEnrollmentData(30);
  const enrollmentData90d = generateEnrollmentData(90);

  const revenueData30d = generateRevenueData(30);
  const revenueData90d = generateRevenueData(90);

  const completionData30d = generateCompletionData(30);
  const completionData90d = generateCompletionData(90);

  // Calculate totals
  const totalEnrollments = dateRange === '30d' 
    ? enrollmentData30d.reduce((sum, val) => sum + val, 0)
    : enrollmentData90d.reduce((sum, val) => sum + val, 0);

  const totalRevenue = dateRange === '30d'
    ? revenueData30d.reduce((sum, val) => sum + val, 0)
    : revenueData90d.reduce((sum, val) => sum + val, 0);

  const totalCompletions = dateRange === '30d'
    ? completionData30d.reduce((sum, val) => sum + val, 0)
    : completionData90d.reduce((sum, val) => sum + val, 0);

  // Calculate percentage changes (mock data)
  const enrollmentChange = dateRange === '30d' ? '+15%' : '+32%';
  const revenueChange = dateRange === '30d' ? '+22%' : '+48%';
  const completionChange = dateRange === '30d' ? '+8%' : '+18%';

  // Chart options
  const enrollmentChartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function(params) {
        return `${params[0].name}: ${params[0].value} enrollments`;
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: dateRange === '30d' ? dates30d : dates90d,
      axisLabel: {
        interval: dateRange === '30d' ? 4 : 14,
        rotate: 45
      }
    },
    yAxis: {
      type: 'value',
      name: 'Enrollments'
    },
    series: [
      {
        name: 'Enrollments',
        type: 'bar',
        data: dateRange === '30d' ? enrollmentData30d : enrollmentData90d,
        itemStyle: {
          color: '#1e40af'
        },
        emphasis: {
          itemStyle: {
            color: '#1e3a8a'
          }
        },
        barWidth: '60%'
      }
    ]
  };

  const revenueChartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(params) {
        return `${params[0].name}: $${params[0].value}`;
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: dateRange === '30d' ? dates30d : dates90d,
      axisLabel: {
        interval: dateRange === '30d' ? 4 : 14,
        rotate: 45
      }
    },
    yAxis: {
      type: 'value',
      name: 'Revenue ($)',
      axisLabel: {
        formatter: '${value}'
      }
    },
    series: [
      {
        name: 'Revenue',
        type: 'line',
        data: dateRange === '30d' ? revenueData30d : revenueData90d,
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#f59e0b'
        },
        lineStyle: {
          color: '#f59e0b',
          width: 3
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(245, 158, 11, 0.4)'
              },
              {
                offset: 1,
                color: 'rgba(245, 158, 11, 0.1)'
              }
            ]
          }
        }
      }
    ]
  };

  const completionChartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function(params) {
        return `${params[0].name}: ${params[0].value} completions`;
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: dateRange === '30d' ? dates30d : dates90d,
      axisLabel: {
        interval: dateRange === '30d' ? 4 : 14,
        rotate: 45
      }
    },
    yAxis: {
      type: 'value',
      name: 'Completions'
    },
    series: [
      {
        name: 'Completions',
        type: 'bar',
        data: dateRange === '30d' ? completionData30d : completionData90d,
        itemStyle: {
          color: '#10b981'
        },
        emphasis: {
          itemStyle: {
            color: '#059669'
          }
        },
        barWidth: '60%'
      }
    ]
  };

  // Module completion data for pie chart
  const moduleCompletionOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: [
        'Module 1', 
        'Module 2', 
        'Module 3', 
        'Module 4', 
        'Module 5', 
        'Module 6'
      ]
    },
    series: [
      {
        name: 'Completions',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 235, name: 'Module 1' },
          { value: 210, name: 'Module 2' },
          { value: 162, name: 'Module 3' },
          { value: 135, name: 'Module 4' },
          { value: 87, name: 'Module 5' },
          { value: 45, name: 'Module 6' }
        ]
      }
    ]
  };

  // Payment plan distribution
  const paymentPlanOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: [
        'Full Program', 
        'Payment Plan', 
        '6-Month Financing'
      ]
    },
    series: [
      {
        name: 'Plans',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { 
            value: 435, 
            name: 'Full Program',
            itemStyle: { color: '#1e3a8a' }
          },
          { 
            value: 310, 
            name: 'Payment Plan',
            itemStyle: { color: '#f59e0b' }
          },
          { 
            value: 178, 
            name: '6-Month Financing',
            itemStyle: { color: '#10b981' }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/admin/dashboard')}
                className="flex items-center text-gray-600 hover:text-navy-900 transition-colors"
              >
                <SafeIcon icon={FiArrowLeft} className="mr-2" />
                Back to Dashboard
              </button>
              <div className="border-l border-gray-300 pl-4">
                <h1 className="text-lg font-bold text-navy-900">Analytics Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiCalendar} className="text-gray-400" />
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                >
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                </select>
              </div>
              <button className="bg-sage-500 hover:bg-sage-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                <SafeIcon icon={FiDownload} className="text-sm" />
                <span>Export Data</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <SafeIcon icon={FiUsers} className="text-2xl text-blue-600" />
              </div>
              <span className="text-sm font-medium text-green-600">
                {enrollmentChange}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-1">
              {totalEnrollments}
            </h3>
            <p className="text-gray-600">New Enrollments</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-gold-100 p-3 rounded-lg">
                <SafeIcon icon={FiDollarSign} className="text-2xl text-gold-600" />
              </div>
              <span className="text-sm font-medium text-green-600">
                {revenueChange}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-1">
              ${totalRevenue.toLocaleString()}
            </h3>
            <p className="text-gray-600">Total Revenue</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <SafeIcon icon={FiBarChart2} className="text-2xl text-green-600" />
              </div>
              <span className="text-sm font-medium text-green-600">
                {completionChange}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-1">
              {totalCompletions}
            </h3>
            <p className="text-gray-600">Module Completions</p>
          </div>
        </motion.div>

        {/* Enrollment Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-navy-900">Enrollment Trends</h3>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiFilter} className="text-gray-400" />
              <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-navy-500 focus:border-transparent">
                <option>All Plans</option>
                <option>Full Program</option>
                <option>Payment Plan</option>
                <option>Financing</option>
              </select>
            </div>
          </div>
          <ReactECharts 
            option={enrollmentChartOption} 
            style={{ height: '400px', width: '100%' }} 
          />
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
            <div className="text-center">
              <p className="text-sm text-gray-600">Average Daily</p>
              <p className="text-xl font-bold text-navy-900">
                {(totalEnrollments / (dateRange === '30d' ? 30 : 90)).toFixed(1)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Peak Day</p>
              <p className="text-xl font-bold text-navy-900">
                {dateRange === '30d' ? 
                  Math.max(...enrollmentData30d) : 
                  Math.max(...enrollmentData90d)
                }
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Conversion Rate</p>
              <p className="text-xl font-bold text-navy-900">5.4%</p>
            </div>
          </div>
        </motion.div>

        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-navy-900">Revenue Growth</h3>
          </div>
          <ReactECharts 
            option={revenueChartOption} 
            style={{ height: '400px', width: '100%' }} 
          />
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
            <div className="text-center">
              <p className="text-sm text-gray-600">Average Daily</p>
              <p className="text-xl font-bold text-navy-900">
                ${(totalRevenue / (dateRange === '30d' ? 30 : 90)).toFixed(0)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Avg. Order Value</p>
              <p className="text-xl font-bold text-navy-900">$745</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Projected Monthly</p>
              <p className="text-xl font-bold text-navy-900">
                ${(totalRevenue * (30 / (dateRange === '30d' ? 30 : 90))).toFixed(0)}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Module Completion Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-navy-900">Course Engagement Metrics</h3>
          </div>
          <ReactECharts 
            option={completionChartOption} 
            style={{ height: '400px', width: '100%' }} 
          />
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
            <div className="text-center">
              <p className="text-sm text-gray-600">Avg. Completion Time</p>
              <p className="text-xl font-bold text-navy-900">45 days</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Completion Rate</p>
              <p className="text-xl font-bold text-navy-900">78%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Avg. Student Progress</p>
              <p className="text-xl font-bold text-navy-900">62%</p>
            </div>
          </div>
        </motion.div>

        {/* Pie Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Module Completion Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-navy-900 mb-6">Module Completion Distribution</h3>
            <ReactECharts 
              option={moduleCompletionOption} 
              style={{ height: '300px', width: '100%' }} 
            />
          </motion.div>

          {/* Payment Plan Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-navy-900 mb-6">Payment Plan Distribution</h3>
            <ReactECharts 
              option={paymentPlanOption} 
              style={{ height: '300px', width: '100%' }} 
            />
          </motion.div>
        </div>

        {/* Key Performance Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-navy-900 mb-6">Key Performance Indicators</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-navy-900 mb-2">Student Satisfaction</h4>
              <div className="flex items-center space-x-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gold-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
                <span className="text-sm font-bold text-navy-900">4.7/5</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Based on 325 reviews</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-navy-900 mb-2">Support Response</h4>
              <div className="flex items-center space-x-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-sage-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
                <span className="text-sm font-bold text-navy-900">2.4 hrs</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Average response time</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-navy-900 mb-2">Refund Rate</h4>
              <div className="flex items-center space-x-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '3%' }}></div>
                </div>
                <span className="text-sm font-bold text-navy-900">3%</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Well below industry average</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-navy-900 mb-2">Community Engagement</h4>
              <div className="flex items-center space-x-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
                <span className="text-sm font-bold text-navy-900">72%</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Active participation rate</p>
            </div>
          </div>
        </motion.div>

        {/* Analytics Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
        >
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-2">Analytics Disclaimer:</p>
            <p>
              This analytics dashboard provides data for educational and business planning purposes only.
              All metrics should be reviewed in the context of broader business goals and educational objectives.
              Data is updated daily and may not reflect real-time information.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
import React from 'react';
import { BarChart, LineChart, User, BookOpen, FileText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            百度热搜数据的爬取与分析
          </h1>
          <div className="flex justify-center gap-8 text-gray-600 mb-8">
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <User className="w-5 h-5" />
              <span>作者：西贝贾</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <BookOpen className="w-5 h-5" />
              <span>指导老师：Oeasy</span>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-left hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-blue-500" />
                <h2 className="text-xl font-semibold">项目前言</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                本项目是通过代码爬取相关数据，进行可视化分析的呈现。通过 数据爬取→存储→分析→可视化 的闭环流程，实现对百度实时热搜的持续监控和趋势分析。各脚本协同工作，自动清理旧数据，确保资源高效利用。
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-12">
          {/* First Chart Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <BarChart className="w-7 h-7 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-800">前十名热度值</h2>
            </div>
            <img 
              src="/前十名.png" 
              alt="前十名热度柱状图" 
              className="w-full h-auto rounded-xl mb-8 shadow-md"
            />
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">图表说明</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                <li>横轴：十个热搜关键词</li>
                <li>纵轴：对应的热度值（单位也是×10⁶）</li>
                <li>图表标题为 `baidu_hot_20250605_221729.xlsx 前十名热度值柱状图`，说明数据来源于当晚22:17采样的Excel文件</li>
              </ul>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">1. 热度排名明确可视化：</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>第一名为"'墙'此肯绿"，热度近 7.9M</li>
                    <li>第二名是"习近平同美国总统拜登通电话"，热度略低于第一</li>
                    <li>第三名为"20名台湾艺人照片曝光 公安悬赏通缉"</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">2. 热度差距分析：</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>十个热词之间热度分布相对平均，最高和最低值相差不到100万</li>
                    <li>最低热度词为"高考题，绝密答案？千万别当真"，热度也接近 <strong>7.0M</strong>，仍处于高位</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">3. 热点事件类型丰富：</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>热搜内容涵盖政治（拜登通话）、社会事件（艺人通缉）、娱乐（歌剧、综艺）、高考教育、自然灾害（火山喷发）等多个领域，反映公众关注热点广泛</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Second Chart Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <LineChart className="w-7 h-7 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-800">热度时间变化</h2>
            </div>
            <img 
              src="/热度变化.png" 
              alt="热度变化趋势图" 
              className="w-full h-auto rounded-xl mb-8 shadow-md"
            />
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">图表说明</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                <li>横轴（X轴）：时间（6月5日21:40至22:20左右），每5分钟采样一次</li>
                <li>纵轴（Y轴）：热度值，单位为百万级（×10⁶）</li>
                <li>每条线代表一个热搜关键词的热度随时间的变化，共十条线</li>
                <li>图例右侧列出了关键词的完整文本</li>
              </ul>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">1. 热度整体趋势较为平稳：</h4>
                  <p className="text-gray-700">
                    大部分热搜词在该时间段的热度波动很小，基本保持水平线状态，说明热度变化不大。
                    个别关键词在短时间内略有波动，比如"热播的《歌剧魅影》鞋正在踢掉你的脚"和"高考题，绝密答案？千万别当真"略有小幅下降。
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">2. 最高热度关键词：</h4>
                  <p className="text-gray-700">
                    图中最上方的曲线代表热度最高的词语，颜色为橙色（"'墙'此肯绿"），热度值接近 7.9×10⁶。
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">3. 排名和热度差异：</h4>
                  <p className="text-gray-700">
                    各热词热度分布密集，差异约在几十万左右。
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">综合结论</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>热搜关键词热度在短时间内稳定，说明此时间段是一个<strong>相对冷静的观察窗口</strong></li>
                    <li>热搜排名与热度变化相对一致，<strong>未出现热度短时间大幅上升/下降的爆款词</strong>，属于稳定高热期</li>
                    <li>关注度最高的是<strong>涉及敏感政治与公共安全的事件</strong>，其次是<strong>热门话题娱乐和高考相关内容</strong></li>
                    <li>若要进一步分析趋势，可延长时间窗口，看是否出现爆发性增长，判断舆情拐点</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 text-center text-gray-600 border-t border-gray-200 pt-8">
          <p className="hover:text-blue-600 transition-colors">python程序设计课程作业展示 CUC</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
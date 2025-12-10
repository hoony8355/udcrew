import React, { useState } from 'react';
import Modal from '../ui/Modal';

// Expanded Mock Data (approx 20 items)
const ALL_CONCERNS = [
  // TEAM
  { tag: "TEAM", time: "2 hours ago", title: "공동창업자가 번아웃으로 퇴사를 고민하고 있습니다.", stats: "💬 5 · 👀 42" },
  { tag: "TEAM", time: "3 days ago", title: "초기 멤버에게 스톡옵션을 얼마나 부여해야 적절할까요?", stats: "💬 12 · 👀 150" },
  { tag: "TEAM", time: "1 week ago", title: "개발자 채용이 너무 어렵습니다. 비개발 대표님들 노하우 있으신가요?", stats: "💬 8 · 👀 98" },
  { tag: "TEAM", time: "1 week ago", title: "팀원 간 불화가 생겼을 때, 대표가 어디까지 개입해야 할까요?", stats: "💬 6 · 👀 77" },
  
  // FUNDING
  { tag: "FUNDING", time: "Yesterday", title: "엔젤 투자 유치 시 초기 밸류에이션 산정 기준이 궁금합니다.", stats: "💬 12 · 👀 108" },
  { tag: "FUNDING", time: "4 days ago", title: "팁스(TIPS) 운영사 컨택 시 콜드메일 팁 공유 부탁드립니다.", stats: "💬 15 · 👀 210" },
  { tag: "FUNDING", time: "2 weeks ago", title: "Pre-A 단계에서 전략적 투자자(SI)를 받는 게 맞을까요?", stats: "💬 9 · 👀 130" },
  { tag: "FUNDING", time: "2 weeks ago", title: "런웨이가 6개월 남았습니다. 지금 브릿지 라운드를 열어야 할까요?", stats: "💬 21 · 👀 405" },

  // PRODUCT & GTM
  { tag: "PRODUCT", time: "5 days ago", title: "초기 유저 리텐션이 10%대에서 오르지 않습니다. 조언 구합니다.", stats: "💬 15 · 👀 210" },
  { tag: "PRODUCT", time: "1 week ago", title: "MVP 개발 시 외주 vs 내부 채용, 어떤 선택을 하셨나요?", stats: "💬 18 · 👀 220" },
  { tag: "GTM", time: "2 days ago", title: "B2B 세일즈 리드 타임이 너무 깁니다. 단축시키는 팁이 있을까요?", stats: "💬 8 · 👀 65" },
  { tag: "GTM", time: "3 days ago", title: "인스타그램 광고 효율이 급락했습니다. 대체 채널 추천 부탁드립니다.", stats: "💬 11 · 👀 140" },
  { tag: "GTM", time: "5 days ago", title: "첫 유료 고객 전환을 만들어낸 결정적인 계기가 무엇이었나요?", stats: "💬 25 · 👀 330" },

  // LEGAL & OPS
  { tag: "LEGAL", time: "3 days ago", title: "주주간계약서 작성 시 독소조항 체크리스트 공유해주실 분?", stats: "💬 4 · 👀 30" },
  { tag: "OPS", time: "1 week ago", title: "법인 설립 등기 셀프로 하신 분 계신가요? 팁 부탁드립니다.", stats: "💬 3 · 👀 45" },

  // MENTAL & PIVOT
  { tag: "PIVOT", time: "1 week ago", title: "지금 아이템을 접고 피벗을 해야 할지, 조금 더 밀어붙여야 할지...", stats: "💬 22 · 👀 350" },
  { tag: "MENTAL", time: "2 days ago", title: "매일 밤 잠이 안 옵니다. 창업가분들 멘탈 관리 어떻게 하시나요?", stats: "💬 30 · 👀 500" },
  { tag: "MENTAL", time: "3 days ago", title: "가족들의 반대와 걱정, 어떻게 설득하고 버티시나요?", stats: "💬 14 · 👀 180" },
  { tag: "PIVOT", time: "2 weeks ago", title: "피벗 후 팀원들을 설득하는 과정이 너무 힘듭니다.", stats: "💬 7 · 👀 90" },
];

const CATEGORIES = ["All", "TEAM", "FUNDING", "PRODUCT", "GTM", "LEGAL", "MENTAL", "PIVOT"];

const ReviewSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredConcerns = selectedCategory === "All" 
    ? ALL_CONCERNS 
    : ALL_CONCERNS.filter(c => c.tag === selectedCategory);

  return (
    <section id="reviews" className="min-h-screen bg-bg py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex items-baseline space-x-4 mb-16">
          <h2 className="text-6xl font-thin text-accent">%</h2>
          <h2 className="text-3xl font-bold tracking-tighter uppercase">Reviews & Concerns</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Concern Board Preview */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-accent pl-4">Member Concerns</h3>
            <p className="text-sm text-sub mb-8 leading-relaxed">
              사업, 팀, 자금, 개인의 고민까지.<br/>
              ud.crew 멤버들이 솔직하게 나누고 있는 고민들을 확인해보세요.
            </p>

            {/* Board List Preview (First 4 items) */}
            <div className="space-y-4 mb-8">
                {ALL_CONCERNS.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/5 p-6 hover:border-accent/30 transition-colors cursor-pointer">
                        <div className="flex space-x-2 mb-2">
                            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-sub font-bold">{item.tag}</span>
                            <span className="text-[10px] text-white/30">{item.time}</span>
                        </div>
                        <h4 className="text-white font-medium hover:underline decoration-accent underline-offset-4">
                            {item.title}
                        </h4>
                        <div className="flex items-center space-x-4 mt-3 text-xs text-white/40">
                            <span>{item.stats}</span>
                        </div>
                    </div>
                ))}
            </div>

            <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-accent text-white font-bold py-3 px-8 text-sm uppercase tracking-widest hover:bg-white hover:text-accent transition-colors w-full md:w-auto"
            >
                Go to Board
            </button>
          </div>

          {/* Right: UDBR Case Study */}
          <div>
            <div className="flex justify-between items-end mb-8">
                <h3 className="text-xl font-bold border-l-4 border-white pl-4">UDBR</h3>
                <span className="text-xs text-sub tracking-widest">Underdogs Business Review</span>
            </div>
            
            <div className="group cursor-pointer">
                {/* Image Placeholder */}
                <div className="w-full h-64 bg-gray-700 mb-6 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img src="https://picsum.photos/800/400?grayscale" alt="Case Study" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"/>
                    <div className="absolute top-4 left-4 bg-accent text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                        Case Study #01
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex space-x-2 text-[10px] text-accent font-mono uppercase">
                        <span>#매출정체</span>
                        <span>#퍼포먼스마케팅</span>
                        <span>#리텐션</span>
                    </div>
                    <h4 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors">
                        월 매출 3천만 원에서 성장이 멈춘 D2C 브랜드,<br/>무엇이 병목이었나
                    </h4>
                    <p className="text-sm text-sub leading-relaxed border-l border-white/20 pl-4">
                        성공적인 초기 론칭 이후 6개월째 같은 매출을 유지하고 있는 D2C 브랜드의 사례. 
                        퍼포먼스 광고 효율 저하와 함께 '재구매 구조'가 설계되지 않은 채 성장해온 비즈니스의 문제를 정밀 분석합니다.
                    </p>
                    <div className="pt-4">
                        <span className="text-xs border-b border-accent pb-1">Read Full Case &rarr;</span>
                    </div>
                </div>
            </div>

            {/* List Item 2 (Small) */}
            <div className="mt-12 pt-8 border-t border-white/10 flex items-start space-x-4 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="w-24 h-16 bg-gray-800 flex-shrink-0"></div>
                <div>
                    <h5 className="font-bold text-sm mb-1 hover:text-accent">초기 팀 빌딩, 지분 구조 설계의 함정</h5>
                    <p className="text-xs text-sub">공동창업자 간 갈등을 미연에 방지하는 계약 가이드</p>
                </div>
            </div>
          </div>
        </div>

        {/* Board Modal */}
        <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            title="Concern Board"
        >
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-b border-white/10 pb-4">
                     {/* Category Filter */}
                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 py-1.5 text-[10px] uppercase tracking-wider transition-colors rounded ${
                                    selectedCategory === cat 
                                    ? 'bg-accent text-white font-bold' 
                                    : 'bg-white/5 text-sub hover:bg-white/10'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    
                    <button 
                        onClick={() => alert("고민 작성 폼이 열립니다.")}
                        className="text-xs border border-accent text-accent px-4 py-2 hover:bg-accent hover:text-white transition-colors flex-shrink-0"
                    >
                        Write a Concern
                    </button>
                </div>

                <div className="space-y-1">
                    <div className="text-xs text-sub mb-2 text-right">Total {filteredConcerns.length} posts</div>
                    {filteredConcerns.map((item, idx) => (
                        <div key={idx} className="group flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-1">
                                    <span className="text-[10px] text-accent font-bold bg-accent/10 px-1.5 py-0.5 rounded min-w-[50px] text-center">{item.tag}</span>
                                    <span className="text-[10px] text-white/30">{item.time}</span>
                                </div>
                                <h4 className="text-base font-medium text-white group-hover:text-accent transition-colors">
                                    {item.title}
                                </h4>
                            </div>
                            <div className="mt-2 md:mt-0 md:ml-4 text-xs text-white/40 min-w-[120px] text-right">
                                {item.stats}
                            </div>
                        </div>
                    ))}
                    
                    {filteredConcerns.length === 0 && (
                        <div className="text-center text-sub py-12">
                            게시물이 없습니다.
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    </section>
  );
};

export default ReviewSection;
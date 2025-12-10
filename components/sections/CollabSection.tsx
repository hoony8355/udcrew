import React, { useState } from 'react';
import Modal from '../ui/Modal';

const OPEN_OPPORTUNITIES_DATA = [
  {
    category: "Partner Search",
    dday: "D-5",
    title: "인도네시아 해외 동반 진출 파트너 모집 (소비재/유통)",
    desc: "자카르타 팝업스토어 공동 운영 및 물류 쉐어하실 팀을 찾습니다.",
    author: "Global Team A"
  },
  {
    category: "Consortium",
    dday: "D-12",
    title: "2024 초기창업패키지 컨소시엄 모집",
    desc: "친환경 소재 R&D 분야 협력 가능한 제조 스타트업 제안주세요.",
    author: "Eco Makers"
  },
  {
    category: "Hiring / Project",
    dday: "D-20",
    title: "[긴급] 시리즈 A IR 디자인 & 스토리라인 파트너",
    desc: "단기 프로젝트로 2주간 집중해주실 프리랜서/에이전시 크루원.",
    author: "Fintech B"
  },
  {
    category: "Marketing",
    dday: "D-2",
    title: "성수동 팝업스토어 F&B 협업 제안",
    desc: "11월 중순 예정된 팝업스토어 내 음료/다과 케이터링 협업 제안드립니다.",
    author: "Brand C"
  },
  {
    category: "Tech",
    dday: "D-15",
    title: "LLM 모델 파인튜닝 개발자/팀 찾습니다",
    desc: "법률 데이터 기반 파인튜닝 경험 있으신 분, 지분투자/프로젝트 모두 열려있습니다.",
    author: "Legal Tech D"
  },
  {
    category: "Co-founding",
    dday: "Always",
    title: "C-Level 마케팅 이사(CMO) 모십니다",
    desc: "현재 시드 투자 완료, 초기 멤버로 합류하여 그로스를 주도하실 분.",
    author: "Commerce E"
  }
];

const CollabSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="collab" className="min-h-screen bg-[#323332] py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex items-baseline space-x-4 mb-16">
          <h2 className="text-6xl font-thin text-accent">×</h2>
          <h2 className="text-3xl font-bold tracking-tighter uppercase">Collab & Propose</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* 1. Collab Proposal Form */}
          <div className="lg:col-span-1 space-y-6">
            <div className="border-l-2 border-accent pl-6">
              <h3 className="text-xl font-bold mb-2">Propose to ud.crew</h3>
              <p className="text-sm text-sub leading-relaxed">
                언더독스 및 다른 크루 멤버들과 함께 만들고 싶은 프로젝트, 콘텐츠, 프로그램이 있다면 제안해주세요.
              </p>
            </div>
            <form className="space-y-4 pt-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name / Team" className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-accent outline-none text-white" />
              <input type="email" placeholder="Email Contact" className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-accent outline-none text-white" />
              <select className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-accent outline-none text-sub">
                <option>Content Collaboration</option>
                <option>Business Partnership</option>
                <option>Joint Consortium</option>
                <option>Other</option>
              </select>
              <textarea rows={4} placeholder="Brief description of your proposal" className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-accent outline-none text-white"></textarea>
              <button className="w-full bg-white text-bg font-bold py-3 hover:bg-accent hover:text-white transition-colors uppercase text-xs tracking-widest">
                Send Proposal
              </button>
            </form>
          </div>

          {/* 2. Open Opportunities */}
          <div className="lg:col-span-1 space-y-6">
            <div className="border-l-2 border-white/20 pl-6">
              <h3 className="text-xl font-bold mb-2">Open Opportunities</h3>
              <p className="text-sm text-sub leading-relaxed">
                지금 크루원들이 파트너를 찾고 있는 콜라보레이션 기회입니다.
              </p>
            </div>
            
            <div className="space-y-3">
               {/* Show first 3 items only */}
               {OPEN_OPPORTUNITIES_DATA.slice(0, 3).map((item, idx) => (
                 <div key={idx} className="bg-black/20 border border-white/5 p-5 hover:border-accent/50 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] text-accent uppercase tracking-wider font-bold">{item.category}</span>
                      <span className="text-[10px] text-white/30">{item.dday}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-accent">
                      {item.title}
                    </h4>
                    <p className="text-xs text-sub opacity-70 line-clamp-2">{item.desc}</p>
                 </div>
               ))}
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full border border-white/10 text-sub py-3 hover:bg-white hover:text-black transition-colors uppercase text-xs tracking-widest mt-2"
            >
                More Opportunities +
            </button>
          </div>

          {/* 3. Synergy History */}
          <div className="lg:col-span-1 space-y-6">
             <div className="border-l-2 border-white/20 pl-6">
              <h3 className="text-xl font-bold mb-2">Synergy History</h3>
              <p className="text-sm text-sub leading-relaxed">
                ud.crew 안에서 일어난 연결과 성과의 기록들.
              </p>
            </div>
            <div className="space-y-4">
                <div className="group bg-white/5 border border-white/5 p-4 flex items-center space-x-4 opacity-70 hover:opacity-100 transition-all">
                    <div className="w-12 h-12 bg-white/10 flex-shrink-0"></div>
                    <div>
                        <h4 className="font-bold text-sm text-white">Underdogs x Jeju Beer</h4>
                        <p className="text-xs text-sub mt-1">Local Creator Pop-up (2023.12)</p>
                    </div>
                </div>
                <div className="group bg-white/5 border border-white/5 p-4 flex items-center space-x-4 opacity-70 hover:opacity-100 transition-all">
                    <div className="w-12 h-12 bg-white/10 flex-shrink-0"></div>
                    <div>
                        <h4 className="font-bold text-sm text-white">Alumni A x B Logistics</h4>
                        <p className="text-xs text-sub mt-1">Joint Logistics System Launch</p>
                    </div>
                </div>
                <div className="group bg-white/5 border border-white/5 p-4 flex items-center space-x-4 opacity-70 hover:opacity-100 transition-all">
                    <div className="w-12 h-12 bg-white/10 flex-shrink-0"></div>
                    <div>
                        <h4 className="font-bold text-sm text-white">Underdogs x SK</h4>
                        <p className="text-xs text-sub mt-1">ESG Accelerator Season 3</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Open Opportunities"
      >
        <div className="grid grid-cols-1 gap-4">
          {OPEN_OPPORTUNITIES_DATA.map((item, idx) => (
            <div key={idx} className="bg-black/40 border border-white/10 p-6 flex flex-col md:flex-row md:items-center justify-between hover:border-accent/50 transition-colors">
              <div className="mb-4 md:mb-0 md:mr-6 flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-xs font-bold text-accent px-2 py-1 bg-accent/10 rounded">{item.category}</span>
                  <span className="text-xs text-white/40 border border-white/20 px-2 py-1 rounded">{item.dday}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-sub mb-2">{item.desc}</p>
                <div className="text-xs text-white/30">Posted by {item.author}</div>
              </div>
              <button className="flex-shrink-0 border border-white/20 text-white px-6 py-2 text-xs uppercase hover:bg-white hover:text-black transition-colors">
                Contact
              </button>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
};

export default CollabSection;
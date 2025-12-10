import React, { useState } from 'react';
import { Program } from '../../types';
import Modal from '../ui/Modal';

const PROGRAMS: Program[] = [
  {
    title: "Underdogs Survivors",
    subtitle: "생존에 집중하는 문제 기반 코호트",
    purpose: "당신의 사업이 지금 멈추지 않아야 하는 이유를 증명하십시오.",
    method: "가장 치열한 피어 리뷰와 실행 중심의 트러블 슈팅",
    effects: ["비즈니스 모델의 즉각적 검증", "데스밸리 생존 자금 전략", "고립되지 않는 연대"],
    details: {
      coreValue: "생존이 곧 성장입니다. 아름다운 이론 대신, 당장 내일의 급여와 다음 달의 런웨이를 걱정하는 당신을 위해 설계되었습니다.",
      structure: [
        {
          title: "1. 냉혹한 현실 진단 (Diagnosis)",
          items: [
            "단순한 커피챗이 아닙니다. 매출 정체, 팀 붕괴, PMF 실패 등 당신이 마주한 진짜 문제를 외과 수술처럼 도려내어 정의합니다.",
            "5가지 위기 유형(매출/인력/제품/피벗/번아웃)에 따른 정밀 분류"
          ]
        },
        {
          title: "2. 문제 해결형 코호트 (Cohort)",
          items: [
            "참가비 장벽을 높였습니다. 진짜 의지가 있는 대표들만 남깁니다.",
            "Blind Deep-dive: 계급장을 떼고 오직 '문제' 그 자체에만 집중하는 익명 토론 시스템.",
            "심리적 안전지대 안에서 가장 아픈 부분을 드러내고 치유합니다."
          ]
        },
        {
          title: "3. 생존 키트 장착 (Output)",
          items: [
            "교육 수료증은 종이조각에 불과합니다. 당신은 당장 적용 가능한 '실행 계획(Action Plan)'을 들고 현장으로 복귀합니다.",
            "동료 창업가들의 집단 지성을 통한 솔루션 도출"
          ]
        }
      ],
      differentiation: [
        "강의실의 이론이 아닌, 전쟁터의 전술을 다룹니다.",
        "성공한 멘토의 무용담이 아닌, 옆 동료의 치열한 생존기를 공유합니다."
      ],
      marketingPoint: {
        label: "내 창업가 유형 진단하기 (UD Type Check)",
        url: "#"
      }
    }
  },
  {
    title: "Underdogs Re:bound",
    subtitle: "실패 후의 회복과 재설계",
    purpose: "실패는 마침표가 아니라, 더 단단한 다음 문장의 시작입니다.",
    method: "제주 팝업 캠퍼스에서의 몰입형 회고와 재창업 시뮬레이션",
    effects: ["창업가 회복 탄력성(Resilience) 강화", "실패 경험의 자산화", "재도전 시나리오 완성"],
    details: {
      coreValue: "우리는 실패를 사랑합니다. 한 번 넘어져 본 사람만이 가질 수 있는 단단함을 믿기 때문입니다. 국내 유일의 재도전 특화 캠프.",
      structure: [
        {
          title: "Environment: 단절과 몰입",
          items: [
            "복잡한 도심을 떠나 제주 팝업 캠퍼스에서 3~7일간 오직 '나'와 '업'에만 집중합니다.",
            "패배감에서 벗어나 객관적으로 상황을 바라보는 환경 전환 효과"
          ]
        },
        {
          title: "Program: 회복에서 재설계로",
          items: [
            "Mental Recovery: 심리 전문가와 함께하는 번아웃 치유 및 자존감 회복",
            "Post-Mortem: 실패의 원인을 데이터 기반으로 분석하고 '값비싼 수업료'로 전환합니다.",
            "Re-Design: 관점을 바꾼 새로운 비즈니스 모델 설계 및 재창업 시뮬레이션"
          ]
        },
        {
          title: "Legacy: 당신의 이야기는 역사가 된다",
          items: [
            "당신의 도전과 실패, 그리고 재기의 과정을 언더독스의 브랜드 콘텐츠로 기록합니다.",
            "실패자라는 낙인을 '경험 있는 창업가'라는 훈장으로 바꿉니다."
          ]
        }
      ],
      philosophies: [
        "Fail Fast, Fail Smart",
        "Experience is Asset"
      ],
      references: [
        { title: "중기부: 재창업 기업 생존율 분석 리포트", url: "#" },
        { title: "실패 경험이 재창업 성공에 미치는 영향 (논문)", url: "#" }
      ]
    }
  },
  {
    title: "Underdogs 'A'ming",
    subtitle: "Series A를 향한 성장 가속화",
    purpose: "PMF를 증명한 팀에게 필요한 것은 속도가 아니라 '방향'과 '체계'입니다.",
    method: "실전 투자 유치 시뮬레이션 및 데이터 기반 스케일업 전략",
    effects: ["Series A 투자 유치 확률 극대화", "조직 리스크 관리 시스템", "지속 가능한 성장 엔진"],
    details: {
      coreValue: "초기 교육을 넘어, 성장 단계까지 증명합니다. 언더독스는 당신의 Series A 라운드까지 함께 뛰는 페이스메이커입니다.",
      structure: [
        {
          title: "Scale-up Strategy",
          items: [
            "단순한 지표 관리가 아닌, 투자자가 납득할 수 있는 'J커브' 시나리오를 설계합니다.",
            "재무 모델링(Financial Modeling) 및 현금 흐름 최적화"
          ]
        },
        {
          title: "Investor Relations (IR)",
          items: [
            "VC 파트너들과의 1:1 Office Hour 및 모의 IR",
            "논리가 완벽한 IR Deck 스토리라인 구축 및 디자인 고도화",
            "Demo Day: 검증된 투자자들 앞에서의 최종 피칭"
          ]
        },
        {
          title: "Team Building for Growth",
          items: [
            "10명에서 50명으로 가는 조직의 진통을 예방하는 HR 시스템 구축",
            "C-Level 영입 전략 및 스톡옵션 설계 가이드"
          ]
        }
      ],
      differentiation: [
        "언더독스 Alumni 중 상위 1% 팀들과의 네트워킹",
        "후속 투자 연계 및 파트너사 혜택 집중 지원"
      ]
    }
  }
];

const ProgramSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleOpenDetail = (program: Program) => {
    setSelectedProgram(program);
  };

  const handleCloseDetail = () => {
    setSelectedProgram(null);
  };

  return (
    <section id="programs" className="min-h-screen bg-bg py-24 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4 mb-16">
          <div className="flex items-baseline space-x-4">
            <h2 className="text-6xl font-thin text-accent">+</h2>
            <h2 className="text-3xl font-bold tracking-tighter uppercase">Programs</h2>
          </div>
          <p className="text-sub mt-4 md:mt-0 md:ml-8 text-sm tracking-wide border-l border-accent pl-4">
            Programs that keep you in the game.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {PROGRAMS.map((program, index) => (
            <div 
              key={index} 
              className={`border border-white/10 transition-all duration-500 overflow-hidden ${
                expandedIndex === index ? 'bg-black/20 border-accent shadow-[0_0_15px_rgba(240,85,25,0.15)]' : 'bg-transparent hover:border-white/30'
              }`}
            >
              {/* Card Header */}
              <div 
                className="p-8 cursor-pointer flex justify-between items-center"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div>
                  <h3 className={`text-2xl font-bold uppercase tracking-tight mb-2 transition-colors ${expandedIndex === index ? 'text-accent' : 'text-white'}`}>
                    {program.title}
                  </h3>
                  <p className="text-sub text-sm font-light">{program.subtitle}</p>
                </div>
                <div className={`text-2xl font-thin text-white/50 transition-transform duration-300 ${expandedIndex === index ? 'rotate-45 text-accent' : ''}`}>
                  +
                </div>
              </div>

              {/* Expanded Content Preview */}
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  expandedIndex === index ? 'max-h-[500px] opacity-100 border-t border-white/5' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                  <div>
                    <h4 className="text-accent uppercase text-xs tracking-widest mb-2">Why Join?</h4>
                    <p className="text-white mb-6 leading-relaxed font-medium text-lg">{program.purpose}</p>
                    
                    <h4 className="text-accent uppercase text-xs tracking-widest mb-2">How?</h4>
                    <p className="text-sub leading-relaxed">{program.method}</p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                        <h4 className="text-accent uppercase text-xs tracking-widest mb-2">Key Benefits</h4>
                        <ul className="list-disc list-inside text-sub space-y-1 marker:text-accent">
                        {program.effects.map((effect, i) => (
                            <li key={i}>{effect}</li>
                        ))}
                        </ul>
                    </div>
                    
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleOpenDetail(program);
                        }}
                        className="mt-8 md:mt-0 w-full md:w-auto border border-white/20 text-white px-6 py-3 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors self-start"
                    >
                        View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <Modal
        isOpen={!!selectedProgram}
        onClose={handleCloseDetail}
        title={selectedProgram?.title || ''}
        footer={
            <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between">
                <p className="text-xs text-sub hidden md:block">
                   * 선발 과정을 통해 참여가 확정됩니다.
                </p>
                <button 
                    className="w-full md:w-auto bg-accent text-white font-bold py-4 px-12 text-sm uppercase tracking-widest hover:bg-white hover:text-accent transition-colors shadow-lg shadow-accent/20"
                    onClick={() => alert("신청 페이지로 이동합니다 (현재 모집 기간이 아닙니다)")}
                >
                    Apply for Next Batch
                </button>
            </div>
        }
      >
        {selectedProgram && (
            <div className="space-y-12 text-white">
                {/* Core Value */}
                <div className="relative pl-8">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-transparent"></div>
                    <h3 className="text-accent text-xs uppercase tracking-[0.3em] mb-4">Core Philosophy</h3>
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90">
                        "{selectedProgram.details.coreValue}"
                    </p>
                </div>

                {/* Structure */}
                <div className="space-y-8">
                    <h3 className="text-accent text-xs uppercase tracking-[0.3em] border-b border-white/10 pb-4">Curriculum Structure</h3>
                    <div className="grid grid-cols-1 gap-6">
                        {selectedProgram.details.structure.map((struct, idx) => (
                            <div key={idx} className="bg-[#222] p-8 border-l-4 border-white/10 hover:border-accent transition-colors">
                                <h4 className="font-bold text-xl mb-4 text-white">{struct.title}</h4>
                                <ul className="space-y-3">
                                    {struct.items.map((item, i) => (
                                        <li key={i} className="text-sub text-sm flex items-start leading-relaxed">
                                            <span className="text-accent mr-3 mt-1.5 w-1 h-1 bg-accent rounded-full block flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Differentiation / Philosophy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {selectedProgram.details.differentiation && (
                         <div className="space-y-4">
                            <h3 className="text-accent text-xs uppercase tracking-[0.3em] border-b border-white/10 pb-2">Why Different?</h3>
                            <ul className="space-y-3">
                                {selectedProgram.details.differentiation.map((item, i) => (
                                    <li key={i} className="text-sm text-sub border border-white/10 p-4 bg-white/5">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                         </div>
                    )}

                    {selectedProgram.details.philosophies && (
                         <div className="space-y-4">
                            <h3 className="text-accent text-xs uppercase tracking-[0.3em] border-b border-white/10 pb-2">Keywords</h3>
                            <div className="flex flex-wrap gap-3">
                                {selectedProgram.details.philosophies.map((item, i) => (
                                    <span key={i} className="border border-accent/50 text-accent px-4 py-2 text-sm tracking-wide bg-accent/5">
                                        #{item}
                                    </span>
                                ))}
                            </div>
                         </div>
                    )}
                </div>

                {/* References / Marketing Points */}
                {(selectedProgram.details.marketingPoint || selectedProgram.details.references) && (
                    <div className="bg-gradient-to-r from-accent/10 to-transparent p-6 border-l-4 border-accent mt-8">
                         {selectedProgram.details.marketingPoint && (
                            <div className="mb-6">
                                <span className="block text-xs text-accent uppercase tracking-widest mb-2 font-bold">Recommended</span>
                                <a href={selectedProgram.details.marketingPoint.url} className="inline-flex items-center text-lg text-white font-bold hover:text-accent transition-colors">
                                    {selectedProgram.details.marketingPoint.label} 
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </a>
                            </div>
                         )}
                         {selectedProgram.details.references && (
                            <div>
                                <span className="block text-xs text-accent uppercase tracking-widest mb-2 font-bold">Data & References</span>
                                <ul className="space-y-2">
                                    {selectedProgram.details.references.map((ref, i) => (
                                        <li key={i}>
                                            <a href={ref.url} className="text-xs text-sub hover:text-white transition-colors flex items-center">
                                                <span className="w-1 h-1 bg-white/50 rounded-full mr-2"></span>
                                                {ref.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                         )}
                    </div>
                )}
            </div>
        )}
      </Modal>
    </section>
  );
};

export default ProgramSection;
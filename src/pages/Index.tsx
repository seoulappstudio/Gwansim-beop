import React from "react";

import EmailSignup from "@/components/EmailSignup";

const Index = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-dark-space-navy via-dark-space-purple to-dark-space-deep 
                  relative overflow-hidden font-inter"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-vibrant-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img
              src="/logo.png"
              alt="Gwansim-beop Logo"
              className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 p-4 shadow-lg"
            />
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight lg:leading-loose animate-fade-in-up font-inter">
            때론 안전하게, 때론 센스있게. <br />
            <span className="bg-gradient-to-r from-vibrant-pink to-purple-400 bg-clip-text text-transparent">
              당신의 마음을 읽는 선물 AI
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-base sm:text-xl md:text-2xl text-off-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-inter"
            style={{ animationDelay: "0.3s" }}
          >
            30초의 질문으로 고민을 즐거움으로 바꿔보세요.
          </p>
          {/** Option 2 (보존):
           * 선물 고민, 30초 만에 끝내세요.
           * '실패 없는 안전한 선물'부터 '상대를 감동시킬 센스 있는 선물'까지,
           * AI가 최신 트렌드를 분석해 가장 완벽한 답을 찾아드려요.
           */}

          {/* Glassmorphism Card for CTA */}
          <div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 
                        shadow-2xl max-w-lg mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <EmailSignup />
          </div>

          {/* Problem Section */}
          <section className="py-20 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-12">
              선물 고르기, 왜 어려울까요?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg text-left">
                <h3 className="text-xl font-semibold text-white mb-4">
                  시간 낭비와 귀찮음
                </h3>
                <p className="text-off-white/80 word-break-keep-all">
                  선물 검색과 비교에 너무 많은 시간을 낭비하고 있습니다.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg text-left">
                <h3 className="text-xl font-semibold text-white mb-4">
                  실패에 대한 두려움
                </h3>
                <p className="text-off-white/80 word-break-keep-all">
                  상대방이 만족할지 확신이 없어 선물 고르기가 불안합니다.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg text-left">
                <h3 className="text-xl font-semibold text-white mb-4">
                  정보 부족
                </h3>
                <p className="text-off-white/80 word-break-keep-all">
                  트렌드한 선물들로 센스 있는 마음을 전하고 싶습니다.
                </p>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="py-20 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-12">
              관심법이 해결해 드립니다!
            </h2>
            <div className="max-w-4xl mx-auto text-left">
              <p className="text-xl md:text-2xl text-off-white/90 mb-8">
                관심법은 AI 기반 선물 추천 서비스로, 당신의 고민을 30초 만에
                해결합니다.
              </p>
              <ul className="space-y-6 text-lg md:text-xl text-off-white/80">
                <li className="flex items-start">
                  <span className="text-vibrant-pink mr-3 text-2xl">✓</span>
                  <span>
                    <strong>개인화된 AI 추천:</strong> 간단한 정보 입력만으로
                    최적의 선물을 추천받으세요.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-vibrant-pink mr-3 text-2xl">✓</span>
                  <span>
                    <strong>성공 확률 200%:</strong> 최신 트렌드를 분석하여 가장
                    만족도 높은 선물을 제안합니다.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-vibrant-pink mr-3 text-2xl">✓</span>
                  <span>
                    <strong>시간 절약:</strong> 선물 고민에 쏟는 시간을
                    획기적으로 줄여드립니다.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-20 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-12">
              관심법, 이렇게 사용하세요!
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg">
                <div className="text-vibrant-pink text-5xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  정보 입력
                </h3>
                <p className="text-off-white/80">
                  선물 받을 분의 관계, 나이, 예산 등 몇 가지 정보를
                  입력해주세요.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg">
                <div className="text-vibrant-pink text-5xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  추천 요청
                </h3>
                <p className="text-off-white/80">
                  '추천받기' 버튼을 누르면 AI가 즉시 분석을 시작합니다.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg">
                <div className="text-vibrant-pink text-5xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  결과 확인
                </h3>
                <p className="text-off-white/80">
                  AI가 추천하는 3가지 선물과 구매 링크를 바로 확인하세요.
                </p>
              </div>
            </div>
          </section>

          {/* Final Call to Action */}
          <section className="py-20 px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8">
              더 이상 선물 때문에 고민하지 마세요.
            </h2>
            <p className="text-xl md:text-2xl text-off-white/90 mb-12 max-w-3xl mx-auto">
              지금 바로 관심법을 통해 완벽한 선물을 찾아보세요!
            </p>
            <div
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 
                        shadow-2xl max-w-lg mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <EmailSignup />
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-6 left-0 right-0 text-center">
          <p className="text-off-white/60 text-sm font-inter">© 2025 관심법</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

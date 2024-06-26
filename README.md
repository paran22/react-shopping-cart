# 장바구니 미션

### Tanstank Query 캐싱 전략

#### 1. 상품

- 데이터 특성 : 업데이트가 자주 필요하지 않다.
  - 현재는 다른 유저의 행동에 의해 변경될 수 있는 데이터가 없다.
  - 상품 정보는 일 1회 정도 업데이트된다고 가정한다.
- query option
  - refetchOnMount: false
  - refetchOnWindowFocus: false
  - staleTime: 1000 x 60 x 4

#### 2. 장바구니 정보

- 데이터 특성
  - 유저의 행동에 의해서만 변경된다.
  - 다른 페이지에서 해당 정보를 수정할 수 있다(장바구니 추가 등)
- query option
  - refetchOnWindowFocus: false

#### 3. 주문 정보

- 데이터 특성
  - 유저의 행동에 의해서만 변경된다.
  - 다른 페이지에서 해당 정보를 수정할 수 있다(장바구니 추가 등)
- query option
  - refetchOnWindowFocus: false

<details>
<summary>요구사항 구현 체크리스트</summary>
### 필수 요구사항

- [x] TanStack Query를 기반으로 상태 분리
  - [x] 낙관적 업데이트를 활용하여 UX/UI 증진
- [x] MSW를 활용한 API mocking
- [x] Endpoint만 변경하면 언제든 Real API를 바라볼 수 있다고 가정하고 상상한다.
  - [x] Real API 없이 로컬에서만 동작하는 상태로 리뷰 받는 것이 기본 원칙
- [ ] 상태 관리 라이브러리가 필요하다면 추가적으로 선택하고 적용한다.
  - [ ] 전략을 세우고 PR 본문에 내용을 작성한다.

#### GNB

- [x] 로고를 누르면 상품목록 페이지로 이동한다.
- [x] 장바구니 버튼을 누르면 장바구니 페이지로 이동한다.
- [x] 주문목록 버튼을 누르면 주문목록 페이지로 이동한다.

#### 상품목록

- [x] 상품들은 n x 4 레이아웃으로 보여진다.
- [x] 상품들에는 사진, 이름, 금액이 보여진다.
- [ ] 장바구니 버튼을 클릭하면 (\*\*) / 자유롭게 구현 후 내용 작성
- [ ] 페이징 혹은 인피니티 스크롤 적용
  - [ ] 뒤로가기 및 페이지 전환시 기존 페이지 및 스크롤 위치 기억

#### 장바구니

- [x] 해당 상품의 수량을 변경할 수 있다.
  - [x] 상품의 수량은 항상 1이상, 20이하여야 한다
    - [x] 상품의 수량이 1이면 상품 수량 감소할 수 없다.
    - [x] 상품의 수량이 20이면 상품 수량 증가할 수 없다.
  - [x] 해당 상품의 총 금액이 변경된다.
  - [x] 해당 상품이 체크되어있으면, 결제예상금액도 변경된다.
- [x] 모두선택 버튼이 체크되면, 상품들이 모두 선택된다.
  - [x] 모두선택 버튼이 체크가 풀리면, 상품들의 선택이 모두 해제된다.
- [ ] 상품 삭제 버튼을 누르면, confirm 메시지가 보여진다.
  - [ ] 확인을 누르면, 선택된 상품이 모두 삭제된다.
  - [ ] 결제예상금액이 0원이 된다.
- [ ] 🗑 버튼을 누르면 confirm 메시지가 보여진다.
  - [x] 확인을 누르면, 해당 상품이 삭제된다.
- [x] 체크된 상품 개수에 따라 주문하기 버튼 내부에 수량이 변경된다.
- [ ] 주문하기 버튼을 누르면, confirm 메시지가 보여진다.
  - [ ] 확인을 누르면, 주문/결제 페이지로 이동한다.
  - [ ] 확인을 누르면, 장바구니에서 선택된 상품들이 삭제된다.
  - [ ] 확인을 누르면, 체크된 상품들을 데이터베이스에서 제거한다.
- [ ] 주문할 상품이 0개이면 버튼이 비활성화된다.

### 2. 선택 요구사항 (심화)

#### 상품 상세

- [ ] 페이지에는 상품 사진, 이름, 금액 정보가 보여진다.
- [ ] 장바구니 버튼을 클릭하면 장바구니 페이지로 이동한다.
- [ ] 장바구니 버튼을 클릭하면 해당 상품이 장바구니에 담긴다.

#### 주문 상세

- [ ] 주문 정보가 보여진다.
- [ ] 장바구니 버튼을 클릭하면, 해당 상품이 장바구니에 담기고 장바구니 이동 선택 모달이 보여진다.
- [ ] 장바구니 이동 버튼을 누르면 장바구니 페이지로 이동한다.

#### UX/UI

- [ ] 반응형 레이아웃을 구현한다.
- [ ] 사용성 개선
  - [ ] 사용자를 위한 로딩 환경 개선
  - [ ] 상품이 없을 때와 같은 다양한 Edge Case 대응
  - [ ] 반응형 레이아웃 구현
  - [ ] 별도의 모바일 레이아웃 추가 제공
- [ ] 매출 증대 및 마케팅을 위해 별도의 기능 구현 (별도의 API 없음)
  - [ ] 브라우저 새로고침시 모든 상태 유지
  - [ ] 흐름을 고려한 맞춤 큐레이팅 상품 추천 기능
  - [ ] 구매 유도를 위한 상품 찜 페이지
- [ ] 매출 증대 및 마케팅을 위한 별도의 도구 추가
  - [ ] Google Analytics
  - [ ] Google Tag Manager
  </details>

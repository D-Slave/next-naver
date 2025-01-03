import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import NaverProvider from "next-auth/providers/naver";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      // credentials 부분이 바로 로그인 폼(form)의 내용
      credentials: {
        username: {
          label: "이메일",
          type: "text",
          placeholder: "이메일 주소를 입력해주세요",
        },
        password: { label: "비밀번호", type: "password" },
      },

      //authorize 함수에서 이메일과 패스워드 부분을 체크해서, 맞으면 user 객체를 리턴하고 틀리면 null을 리턴
      async authorize(credentials, req) {
        // 여기에 논리를 추가하여 제공된 자격 증명에서 사용자를 찾습니다다
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          // 반환된 모든 객체는 JWT의 '사용자' 속성에 저장됩니다
          return user;
        } else {
          // null을 반환하면 사용자에게 세부 정보를 확인하라는 오류가 표시됩니다.
          return null;

          // 이 콜백을 오류로 거부할 수도 있으므로 사용자는 오류 메시지를 쿼리 매개변수로 사용하여 오류 페이지로 전송됩니다
        }
      },
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
  ],
});

export { handler as GET, handler as POST };

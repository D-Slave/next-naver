
export default function Home() {
  return (
      <div>
          <h1><span style={{backgroundColor:"red"}}>Main Page</span></h1>
        <h2 style={{backgroundColor:"red"}}>인증</h2>
          <form
            // action={async ()=> {
            //     'use server';
            //     await signOut();
            // }}
          >
              <button>
                  로그아웃
              </button>
          </form>
      </div>
  );
}

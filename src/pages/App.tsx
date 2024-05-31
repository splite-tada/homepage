import Header from "@/components/Header.tsx"

export default function App() {
  return (
    <>
      <Header/>
      <main>
      </main>
      <footer>
        <div className="copyright">Copyright {(new Date()).getFullYear()} splite all right reserved.</div>
      </footer>
    </>
  )
}

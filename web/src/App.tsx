import "./styles/main.css";
import { MagnifyingGlassPlus } from "phosphor-react"
import logoImg from "./assets/images/Logo.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
      <img src={logoImg} alt="logo nlw esports" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        <span className="text-transparent bg-nlw-gradient bg-clip-text ">
          duo
        </span>
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image1.svg" alt="image game 1" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Name game</strong>
            <span className="text-zinc-300 text-sm">anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image1.svg" alt="image game 2" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Name game</strong>
            <span className="text-zinc-300 text-sm">anuncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image1.svg" alt="image game 3" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Name game</strong>
            <span className="text-zinc-300 text-sm">anuncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image1.svg" alt="image game 4" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Name game</strong>
            <span className="text-zinc-300 text-sm">anuncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image1.svg" alt="image game 5" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Name game</strong>
            <span className="text-zinc-300 text-sm">anuncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image1.svg" alt="image game 6" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Name game</strong>
            <span className="text-zinc-300 text-sm">anuncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center ">
          <div>
            <strong className="text-2xl text-white font-black block">
              Nao encontrou seu duo ?
            </strong>
            <span className="text-zinc-400">
              Publique um anúncio para encontrar novos players !
            </span>
          </div>

          <button className=" py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

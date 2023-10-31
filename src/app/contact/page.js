import React from 'react'

export default function page() {
  return (
    <React.Fragment>
      <div class="py-12 md:py-16 lg:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div class="flex-col flex items-stretch gap-16">
          <div class="flex-col flex items-center gap-5 text-center">
            <p class="text-xl text-slate-800">Got questions or want to make an offer?
            </p>
          </div>
          <div class="grid max-[991px]:gap-x-8 max-[767px]:gap-y-12 grid-cols-1 md:grid-cols-3 gap-14">
            <div class="flex-col flex w-full items-center gap-6 border border-solid border-[#e7eaf1] bg-white px-8 py-16 text-center transition hover:-translate-y-[10px] hover:translate-x-0 max-[767px]:max-w-[400px] rounded-2xl">
              <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-Arc.png" alt="" class="inline-block h-24 w-24"/>
                <a href="tel:+0968356278" class="font-bold text-[#002d40] text-lg lg:text-2xl">+0968356278</a>
            </div>
            <div class="flex-col flex w-full items-center gap-6 border border-solid border-[#e7eaf1] bg-white px-8 py-16 text-center transition hover:-translate-y-[10px] hover:translate-x-0 max-[767px]:max-w-[400px] rounded-2xl">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="" class="inline-block h-24 w-24"/>
                <a href="mailto:long.maru.ng@gmail.com" class="font-bold text-[#002d40] text-lg lg:text-2xl">long.maru.ng@gmail.com</a>
            </div>
            <div class="flex-col flex w-full items-center gap-6 border border-solid border-indigo-600 bg-indigo-600 px-8 py-16 text-center transition hover:-translate-y-[10px] hover:translate-x-0 max-[767px]:max-w-[400px] rounded-2xl">
              <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg" alt="" class="inline-block h-24 w-24"/>
                <a href="discord:maru3127" class="font-bold text-white text-lg lg:text-2xl">maru3127</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

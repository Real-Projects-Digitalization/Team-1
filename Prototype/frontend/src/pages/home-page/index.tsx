import { Search, CircleUserRound, Plus, ChevronRight, Info } from "lucide-react";

export function HomePage() {
  return (
    <div className="px-6 py-10 mx-auto space-y-8">
        
        <header className="flex items-center">

            <div className="w-80">
                <div className="flex items-center">
                    <h2 className="text-5xl font-semibold">Invero</h2>
                </div>
            </div>
            

            <div className="flex-1">
                <div className="px-4 h-16 rounded-xl bg-zinc-800 shadow-shape flex items-center max-w-5xl">
                    <div className="flex items-center gap-2">
                        <Search className="size-5 text-zinc-400"/>
                        <span className="text-zinc-100 text-lg">Search</span>
                    </div>
                </div>
                
            </div>

            <CircleUserRound className="size-5 text-zinc-400 mx-3"/>
            
        </header>

        

        <main className="flex px-4">

            <div className="w-80 space-y-6">
                <button className="bg-blue-600 text-zinc-100 rounded-full px-5 py-2 font-medium shadow-shape flex items-center gap-2 hover:bg-blue-700">
                    New Mail
                    <Plus className="size-5 text-zinc-100 ml-2"/>
                </button>

                <div>Inbox</div>
                <div>Manage Aliases</div>
                <div>Other</div>
            </div>
            
            <div className="flex-1 space-y-6">
                <div className="flex items-center gap-2">
                    <h2 className="text-3xl font-semibold">Inbox</h2>
                    <ChevronRight/>
                </div>

                <div className="space-y-8">
                    <div className="space-y-2.5">
                        <div className="flex gap-2 items-baseline">
                            <span className="text-xl text-zinc-300 font-semibold">Today</span>
                            <span className="text-xs text-zinc-500">Monday</span>
                        </div>
                        <p className="text-sm text-zinc-500">
                            No emails received on this day.
                        </p>
                    </div>

                    <div className="space-y-2.5">
                        <div className="flex gap-2 items-baseline">
                            <span className="text-xl text-zinc-300 font-semibold">Yesterday</span>
                            <span className="text-xs text-zinc-500">Sunday</span>
                        </div>

                        <div className="space-y-2.5">
                            <div className="px-4 py-2.5 bg-zinc-800 rounded-xl shadow-shape flex items-center gap-3 max-w-5xl">
                            
                                <img className="size-10 rounded-full" src="./src/icons/amazon-icon.png"/>
                                <div className="pr-96">
                                    <div className="text-lg text-zinc-100">Amazon</div>
                                    <div className="text-sm text-zinc-500">careers@amazon.com</div>
                                </div>
                                <Info className="size-5 text-blue-600 ml-auto"/>
                            </div>
                        </div>

                        <div className="space-y-2.5">
                            <div className="px-4 py-2.5 bg-zinc-800 rounded-xl shadow-shape flex items-center gap-3 max-w-5xl">
                            
                                <img className="size-10 rounded-full" src="./src/icons/hm-icon.jpg"/>
                                <div className="pr-96">
                                    <div className="text-lg text-zinc-100">Hochschule München</div>
                                    <div className="text-sm text-zinc-500">international@hm.edu</div>
                                </div>
                                <Info className="size-5 text-blue-600 ml-auto"/>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2.5">
                        <div className="flex gap-2 items-baseline">
                            <span className="text-xl text-zinc-300 font-semibold">November 23th</span>
                            <span className="text-xs text-zinc-500">Saturday</span>
                        </div>

                        <div className="space-y-2.5">
                            <div className="px-4 py-2.5 bg-zinc-800 rounded-xl shadow-shape flex items-center gap-3 max-w-5xl">
                            
                                <img className="size-10 rounded-full" src="./src/icons/yt-icon.png"/>
                                <div className="pr-96">
                                    <div className="text-lg text-zinc-100">YouTube</div>
                                    <div className="text-sm text-zinc-500">notification@youtube.com</div>
                                </div>
                                <Info className="size-5 text-blue-600 ml-auto"/>
                            </div>
                        </div>

                        <div className="space-y-2.5">
                            <div className="px-4 py-2.5 bg-zinc-800 rounded-xl shadow-shape flex items-center gap-3 max-w-5xl">
                            
                                <img className="size-10 rounded-full" src="./src/icons/apple-icon.jpg"/>
                                <div className="pr-96">
                                    <div className="text-lg text-zinc-100">Apple</div>
                                    <div className="text-sm text-zinc-500">androidIsBetterThanApple@apple.com</div>
                                </div>
                                <Info className="size-5 text-blue-600 ml-auto"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </main>

    </div>


  );
}
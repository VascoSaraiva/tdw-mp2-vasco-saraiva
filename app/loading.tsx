export default function Loading() {
    return (
        <section className="flex flex-col gap-6">

            <div className="flex flex-col w-full h-[450px] justify-end animate-pulse bg-white rounded-3xl">

                <div className="px-4 flex gap-2 items-center">
                    <p className="bg-gray-200 h-[32px] w-[34px] rounded-full" />
                    <p className="bg-gray-200 h-[22px] w-[150px] rounded-full" />
                </div>

                <div className="px-4 pt-5 pb-6 flex flex-col gap-3">
                    <p className="bg-gray-200 h-[32px] w-full rounded-lg" />
                    <p className="bg-gray-200 h-[32px] w-full rounded-lg" />
                </div>
            </div>

            <div className="flex flex-col w-full h-[450px] justify-end animate-pulse bg-white rounded-3xl">

                <div className="px-4 flex gap-2 items-center">
                    <p className="bg-gray-200 h-[32px] w-[34px] rounded-full" />
                    <p className="bg-gray-200 h-[22px] w-[150px] rounded-full" />
                </div>

                <div className="px-4 pt-5 pb-6 flex flex-col gap-3">
                    <p className="bg-gray-200 h-[32px] w-full rounded-lg" />
                    <p className="bg-gray-200 h-[32px] w-full rounded-lg" />
                </div>
            </div>

        </section>

    )
}
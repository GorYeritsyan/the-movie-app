import { Skeleton } from "../ui/skeleton"

const SkeletonCard = () => {
  return (
    <div className="flex flex-col gap-y-4 flex-wrap gap-x-8">
        <Skeleton className="h-[450px] w-[300px] rounded-lg" />
        <Skeleton className="h-[20px] w-[280px] rounded-lg" />
        <Skeleton className="h-4 w-44 rounded-lg" />
    </div>
  )
}

export default SkeletonCard
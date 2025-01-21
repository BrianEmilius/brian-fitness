import { ClockLoader } from "react-spinners"

export default function Loading() {
	return (
		<div className="absolute w-screen h-screen bg-white flex justify-center items-center z-auto">
			<ClockLoader />
		</div>
	)
}

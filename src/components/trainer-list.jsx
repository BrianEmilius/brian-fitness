"use client"

import Image from "next/image"

export default function TrainerList({ trainers }) {

	return (
		<div className="relative h-[300px] overflow-y-auto after:w-full after:h-[200px] after:fixed after:bg-gradient-to-t to-[rgba(0,0,0,0)] from-[rgba(255,255,255,1)] after:bottom-0 flex flex-col gap-4">
			{trainers.map(trainer => (
				<div className="h-[100px] flex gap-2">
					<Image
						src={trainer.asset.url.replace("http://localhost:4000", "https://brian-trainer-api.onrender.com")}
						width={640}
						height={640}
						className="h-[100px] w-[80px] rounded-lg object-cover"
						alt="" />
					<p>{trainer.trainerName}</p>
				</div>
			))}
		</div>
	)
}

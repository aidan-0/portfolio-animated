import SmoothScroll from "@/components/SmoothScroll";

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
    <SmoothScroll>
        {children}
    </SmoothScroll>
			
		
	);
}

import { AppSidebar } from "@/components/sidebar/app-sidebar"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar"

import { PRODUCTOS } from "@/mockdata"

export default function Page() {


	const productosFiltrados = PRODUCTOS.filter(() => {
		return true
	})







	return (
		<TooltipProvider>
			<SidebarProvider defaultOpen={true}>
				<AppSidebar />
				<SidebarInset>
					<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
						<div className="flex items-center gap-2 px-4">
							<SidebarTrigger className="-ml-1" />
							<Separator
								orientation="vertical"
								className="mr-2 data-[orientation=vertical]:h-4"
							/>
							<Breadcrumb>
								<BreadcrumbList>
									<BreadcrumbItem className="hidden md:block">
										<BreadcrumbLink href="#">
											Mi Colmado RD
										</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator className="hidden md:block" />
									<BreadcrumbItem>
										<BreadcrumbPage>Tienda</BreadcrumbPage>
									</BreadcrumbItem>
								</BreadcrumbList>
							</Breadcrumb>
						</div>
					</header>
					<div className="flex flex-1 flex-col gap-4 p-4">
						<main className="flex-1 overflow-auto p-4">
							<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
								{productosFiltrados.map((producto) => (
									<button
										key={producto.id}
										className="flex flex-col items-center gap-1 rounded-xl border bg-card p-3 text-center transition-all hover:border-primary hover:shadow-sm active:scale-95"
									>
										<div className="flex h-16 w-16 items-center justify-center rounded-lg bg-muted text-2xl">
											📦
										</div>
										<span className="line-clamp-2 text-xs font-medium leading-tight">
											{producto.nombre}
										</span>
										<span className="text-sm font-bold text-primary">
											${producto.precio.toFixed(2)}
										</span>
									</button>
								))}
							</div>
						</main>
					</div>
				</SidebarInset>
			</SidebarProvider>
		</TooltipProvider>
	)
}

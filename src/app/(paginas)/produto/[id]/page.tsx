import { produtos } from "@/src/core"
import ProdutoNaoEncontrado from "@/src/components/produto/ProdutoNaoEncontrado";
import TituloProduto from '../../../../components/produto/TituloProduto';
import InformacoesProduto from '../../../../components/produto/InformacoesProduto';
import BannerCompra from "@/src/components/produto/BannerCompra";

export default function PaginaProduto(props: any) {
    const id = +props.params.id
    const produto = produtos.find((produto) => produto.id === id)

    return produto ? (
        <div className="flex flex-col gap-20 container py-10">
            <div className="flex flex-col gap-10">
                <TituloProduto produto={produto}/>
                <InformacoesProduto produto={produto}/>
                <BannerCompra produto={produto}/>
            </div>
        </div>
    ) : (
        <ProdutoNaoEncontrado />
    )
}
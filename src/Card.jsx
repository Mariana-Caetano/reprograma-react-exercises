import Titulo from './Titulo'
import Imagem from './Imagem'

function Cards() {
    return(
        <>
        <div>
            <Imagem image="https://i.pinimg.com/originals/34/17/2f/34172f8799bfd3a5b8034ba3e8c5d1ff.jpg"/>
            <Titulo title="Marimba"/>
        </div>
        <div>
            <Imagem image="https://riomarkennedyonline.com.br/riomarkennedyonline/2022/06/F91F3372-A7A2-4BE7-BC85-77DA12BCE2EF.png"/>
            <Titulo title="Adênia Chloe"/>
        </div>
        <div>
            <Imagem image="https://upload.wikimedia.org/wikipedia/pt/c/cd/Nazar%C3%A9_Confusa.jpg"/>
            <Titulo title="Nazaré Confusa"/>
        </div>
        <div>
            <Imagem image="https://pbs.twimg.com/media/EaKDlPiUEAgILWM.jpg"/>
            <Titulo title="Capivara"/>
        </div>
        <div>
            <Imagem image="https://stickerly.pstatic.net/sticker_pack/RHXHVCKMx6Nl0NhdhAI4NA/V1VAR5/5/25dea157-321d-4285-829e-59dd1ddcfed9.png"/>
            <Titulo title="Não sei como trabalha"/>
        </div>
       
          
        </>
    )
}

export default Cards
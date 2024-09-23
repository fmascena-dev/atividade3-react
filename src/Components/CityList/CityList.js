import './CityList.css';
import CityItem from '../CityItem/CityItem';

const CityList = () => {
    const cidades = [
        { 
            name: 'Tokyo',
            foto: 'https://as1.ftcdn.net/v2/jpg/02/65/23/70/1000_F_265237090_Muthvb72m2POYFjyx7F5UCQLh9JdBtKN.jpg',
            country: 'Japão',
            link: 'https://www.tudosobretoquio.com'
        },
        { 
            name: 'Nova York',
            foto: 'https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg',
            country: 'Estados Unidos da América',
            link: 'https://www.novayork.net'
        },
        { 
            name: 'Paris',
            foto: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/11/thinkstockphotos-4549879531.jpeg?quality=70',
            country: 'França',
            link: 'https://www.tudosobreparis.com'
        },
        { 
            name: 'London',
            foto: 'https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg',
            country: 'Reino Unido',
            link: 'https://www.tudosobrelondres.com'
        },
        { 
            name: 'Dubai', 
            foto: 'https://images.adsttc.com/media/images/6633/dace/c734/9454/55da/3b63/newsletter/transformando-agua-em-terra-grandes-projetos-de-aterros-ao-redor-do-mundo_2.jpg?1714674430',
            country: 'Emirados Árabes Unidos',
            link: 'https://www.tudosobredubai.com'
        },
        { 
            name: 'Singapura', 
            foto: 'https://conteudo.imguol.com.br/c/noticias/d8/2019/02/09/conhecida-como-a-perola-da-asia-cingapura-e-um-dos-maiores-centros-financeiros-do-mundo-1549729914056_v2_900x506.jpg.webp',
            country: 'Singapura', 
            link: 'https://www.tudosobresingapura.com'
        },
        { 
            name: 'Barcelona',
            foto: 'https://imgmd.net/images/c_limit%2Cw_1200/v1/guia/2746151/barcelona.jpg',
            country: 'Espanha',
            link: 'https://www.tudosobrebarcelona.com'
        },
        { 
            name: 'Sydney',
            foto: 'https://media.timeout.com/images/106087711/750/562/image.webp',
            country: 'Austrália',
            link: 'https://guia.melhoresdestinos.com.br/sydney-176-c.html'
        },
        {
            name: 'Roma',
            foto: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2022/07/GettyImages-493907838.jpg?quality=70&strip=info&w=1280&h=720&crop=1',
            country: 'Itália',
            link: 'https://www.tudosobreroma.com'
        },
        { 
            name: 'Istambul',
            foto: 'https://forbes.com.br/wp-content/uploads/2022/03/5_Life_Istambul-768x512.jpg',
            country: 'Turquia',
            link: 'https://www.tudosobreistambul.com'
        }
    ]

    return (
        <section className="city">
            <h2>Veja as 10 melhores Cidades do Mundo!</h2>
            <ul className="city-list">
                {cidades.filter((cidades) => cidades.country).map((cidades, index) => (
                    <CityItem cidade={cidades} key={index}/>
                ))}
            </ul>
        </section>
    )
}

export default CityList;
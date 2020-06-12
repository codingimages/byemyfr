import {graphql, useStaticQuery} from "gatsby"

const useProductos = () => {
    const data = useStaticQuery(graphql`
        {
            allContentfulProducto {
                nodes {
                    nombre
                    descripcion {
                            descripcion
                        }
                    imagenPrincipal {
                        fluid {
                            src
                        }
                    }
                    costo
                    contentful_id
                }
            }
        }
    `)

    return data.allContentfulProducto.nodes.map(producto => ({
        id: producto.contentful_id,
        nombre: producto.nombre,
        descripcion: producto.descripcion.descripcion,
        imagen: producto.imagenPrincipal.fluid.src,
        precio: producto.costo
    }))
}

export default useProductos
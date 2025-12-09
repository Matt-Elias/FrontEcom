import { useState } from 'react'
import { IoMdClose, IoMdSearch } from 'react-icons/io'
import { FiUpload } from 'react-icons/fi'
import { Calendar } from '@heroui/react'

function AgregarProducto({ onClose, onAgregar }) {
    const [formData, setFormData] = useState({
        nombre: '',
        precio: '',
        cantidad: '',
        autor: '',
        editorial: '',
        numPaginas: '',
        categoria: '',
        imagen: null,
    })

    const [busquedaCategoria, setBusquedaCategoria] = useState('')
    const [mostrarCategorias, setMostrarCategorias] = useState(false)
    const [nombreImagen, setNombreImagen] = useState('')

    // Categorías de ejemplo - estas vendrían de tu API
    const categorias = ['Anime', 'Comedia romántica', 'Acción', 'Drama', 'Fantasía', 'Ciencia ficción', 'Terror', 'Aventura']

    const categoriasFiltradas = categorias.filter((cat) => cat.toLowerCase().includes(busquedaCategoria.toLowerCase()))

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setFormData((prev) => ({
                ...prev,
                imagen: file,
            }))
            setNombreImagen(file.name)
        }
    }

    const handleCategoriaSelect = (categoria) => {
        setFormData((prev) => ({
            ...prev,
            categoria: categoria,
        }))
        setBusquedaCategoria(categoria)
        setMostrarCategorias(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAgregar(formData)
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-background bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800">Agregar producto</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <IoMdClose size={24} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid grid-cols-12 gap-4">
                        {/* Nombre */}
                        <div className="col-span-12 md:col-span-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                                placeholder="Nombre producto"
                                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                        focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                        transition-all duration-200"
                                required
                            />
                        </div>

                        {/* Precio */}
                        <div className="col-span-12 md:col-span-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Precio</label>
                            <input
                                type="text"
                                name="precio"
                                value={formData.precio}
                                onChange={handleInputChange}
                                placeholder="Precio"
                                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                        focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                        transition-all duration-200"
                                required
                            />
                        </div>

                        {/* Cantidad */}
                        <div className="col-span-12 md:col-span-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Cantidad</label>
                            <input
                                type="text"
                                name="cantidad"
                                value={formData.cantidad}
                                onChange={handleInputChange}
                                placeholder="Cantidad"
                                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                      transition-all duration-200"
                                required
                            />
                        </div>

                        {/* Autor */}
                        <div className="col-span-12 md:col-span-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Autor</label>
                            <input
                                type="text"
                                name="autor"
                                value={formData.autor}
                                onChange={handleInputChange}
                                placeholder="Autor"
                                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                    transition-all duration-200"
                                required
                            />
                        </div>

                        {/* Editorial */}
                        <div className="col-span-12 md:col-span-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Editorial</label>
                            <input
                                type="text"
                                name="editorial"
                                value={formData.editorial}
                                onChange={handleInputChange}
                                placeholder="Editorial"
                                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                  transition-all duration-200"
                                required
                            />
                        </div>

                        {/* No° Páginas */}
                        <div className="col-span-12 md:col-span-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">No° Páginas</label>
                            <input
                                type="text"
                                name="numPaginas"
                                value={formData.numPaginas}
                                onChange={handleInputChange}
                                placeholder="No° Páginas"
                                className="w-full h-11 px-4 border border-gray-300 rounded-lg text-sm
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                    transition-all duration-200"
                            />
                        </div>

                        {/* Categoría con búsqueda */}
                        <div className="col-span-12 md:col-span-6 relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={busquedaCategoria}
                                    onChange={(e) => {
                                        setBusquedaCategoria(e.target.value)
                                        setMostrarCategorias(true)
                                    }}
                                    onFocus={() => setMostrarCategorias(true)}
                                    placeholder="Buscar categoría"
                                    className="w-full h-11 pl-3 pr-10 bg-white border border-gray-300 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    required
                                />
                                <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            </div>

                            {/* Dropdown de categorías */}
                            {mostrarCategorias && categoriasFiltradas.length > 0 && (
                                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                                    {categoriasFiltradas.map((categoria, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => handleCategoriaSelect(categoria)}
                                            className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm text-gray-700 transition-colors"
                                        >
                                            {categoria}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Subir imagen */}
                        <div className="col-span-12 md:col-span-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subir imagen</label>
                            <div className="relative">
                                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="file-upload" required />
                                <label
                                    htmlFor="file-upload"
                                    className="flex items-center justify-between w-full h-11 px-3 bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
                                >
                                    <span className="text-sm text-gray-400">{nombreImagen || 'Adjuntar'}</span>
                                    <FiUpload size={20} className="text-gray-400" />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Botones */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-8 h-11 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md font-medium transition-colors"
                        >
                            Cancelar
                        </button>
                        <button type="submit" className="px-8 h-11 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition-colors">
                            Agregar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AgregarProducto

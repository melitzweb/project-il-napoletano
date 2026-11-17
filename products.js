export function filtrarPorNombre(productos, texto) {
  return productos.filter(p =>
    p.nombre.toLowerCase().includes(texto.toLowerCase().trim())
  );
}
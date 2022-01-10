export default function PontPlugin() {
  return {
    name: 'pont-plugin',
    resolveId: async (id, importer, resolveOpts)=>{
      console.log(id, '＝＝＝＝？　pont-plugin　')
      if (id.includes('/src/api/hooks.js')) {
        console.log(id, '＝＝＝＝？　pont-plugin　')
      }
      return id;
    }
  }
}  
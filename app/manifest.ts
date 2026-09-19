import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name:"TRIUMPHUS — Cabinet d'Architecture", short_name:"TRIUMPHUS", description:"Architecture, urbanisme, design et expertise immobilière à Cotonou.", start_url:"/", display:"standalone", background_color:"#101214", theme_color:"#103456" }; }

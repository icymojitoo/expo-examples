import {
    BoxBufferGeometry,
    Mesh,
    MeshStandardMaterial,
} from "three";

import { TextureLoader } from "expo-three";

const icon = "../assets/icon.jpg";

class IconMesh extends Mesh {
    constructor() {
        super(
            new BoxBufferGeometry(1.0, 1.0, 1.0),
            new MeshStandardMaterial({
                map: new TextureLoader().load(require(icon)),
            })
        );
    }
}

export default IconMesh;
import Phaser from 'phaser';
export default class MainScene extends Phaser.Scene {

    private scaleX = 1.75;
    private scaleY = 1.75;

    constructor() {
        const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
            key: 'MainScene',
        };
        super(sceneConfig);
    }
    public preload(): void {
        this.load.image('tileset_field', 'assets/TilesetField.png');
        this.load.image('tileset_nature', 'assets/TilesetNature.png');
        this.load.tilemapTiledJSON('tilemap','assets/basic-map.json');
    }

    public create(): void {
        //this.add.image(300,400, 'tileset_field' );

        const tilemapConfig: Phaser.Types.Tilemaps.TilemapConfig = {
            key: 'tilemap'
        };


        // create the Tilemap
        const map = this.make.tilemap(tilemapConfig);

        // add the tileset image we are using
        const tilesetField = map.addTilesetImage('TilesetField', 'tileset_field');
        const tilesetNature = map.addTilesetImage('TilesetNature', 'tileset_nature');

        if(tilesetField) {
            const layer1 = map.createLayer('Ground', tilesetField);
            layer1?.setScale(this.scaleX, this.scaleY);
        }
        if(tilesetNature) {
            const layer2 = map.createLayer('Trees', tilesetNature);
            layer2?.setScale(this.scaleX, this.scaleY);
        }
    }

    public update(): void {
    }

}
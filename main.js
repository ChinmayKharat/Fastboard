import { createFastboard, mount } from "@netless/fastboard";

let app;
async function mountFastboard(div) {
    
    app = await createFastboard({
        sdkConfig: {
            appIdentifier: "y69tMDqPEe6qg3_eoBUomQ/AHdW4z1QWXS0Xg",
            region: "us-sv",
        },
        joinRoom: {
            uid: "User ID",
            uuid: "029e6cf03a9111ee9e6241209ace6cf9",
            roomToken: "NETLESSROOM_YWs9ZE5XVTFueGlHeGc4ZjRyRiZub25jZT0xNjkyMjU2NzEzNTM3MDAmcm9sZT0wJnNpZz00MWMxYTk0MGE3ZTM3MGViODYwNjI1YWYwZTBhZDBjOGFhYzc3ZWM1ZTBiYmJjNWE4ODc4NzEyOTc3ZDc4NTRkJnV1aWQ9MDI5ZTZjZjAzYTkxMTFlZTllNjI0MTIwOWFjZTZjZjk",
        },
        managerConfig: {
            cursor: true,
            
        },
    });
    window.app = app;
    return mount(app, div);
}

mountFastboard(document.getElementById("app"));



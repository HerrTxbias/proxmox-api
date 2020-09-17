import { Proxmox } from "./model";
import ProxmoxEngine from "./ProxmoxEngine";
import { buildApiProxy } from "./proxy";

//export function proxyProxmox(ovhEngine: ApiRequestable): Proxmox.Api {
//    return buildApiProxy(ovhEngine, '/api2/json');
//}

export function proxmoxApi(options: { host: string, port?: number, schema?: 'https' | 'http', username?: string, password: string }): Proxmox.Api {
    return buildApiProxy(new ProxmoxEngine(options), '/api2/json');
}

export default proxmoxApi;

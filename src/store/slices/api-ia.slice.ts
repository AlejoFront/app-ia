import { createSlice } from '@reduxjs/toolkit';
import { apiService } from 'store/service';

const initialState:{
    isLoading: boolean;
    isAuthenticated: boolean;
    apiKey: string;
    status: {
        code: null;
        message: null;
    };
    response: any[];
    request: {
        description: string;
        criteriaList: string[];
    };
} = {
    isLoading: false,
    isAuthenticated: false,
    apiKey: '',
    status: { code: null, message: null },
    response: [
        {
            "id": "TC-207-001",
            "name": "Validación de conexión exitosa con certificado actualizado en el servicio",
            "description": "Verifica que la aplicación se conecta correctamente con el servicio después de la actualización del certificado en el servicio de almacenamiento (Certificate Manager, Secrets Manager o Parameter Storage).",
            "preconditions": [
                "La aplicación está instalada y funcional.",
                "El certificado ha sido actualizado en el servicio de almacenamiento.",
                "La aplicación se reinicia o se forza el cierre y se vuelve a abrir."
            ],
            "gherking": {
                "given": "La aplicación está instalada y el certificado ha sido actualizado en el servicio de almacenamiento",
                "when": "El usuario abre la aplicación e intenta autenticarse",
                "then": "La autenticación es exitosa",
                "and": "El usuario puede acceder a las funcionalidades de la aplicación sin errores de conexión"
            },
            "expected_result": "La aplicación se autentica correctamente y funciona sin errores de conexión.",
            "priority": "High",
            "type": "Functional",
            "recomendations": [
                "Automatizar este caso de prueba para asegurar la validación en cada release.",
                "Monitorear la frecuencia con la que se actualizan los certificados y evaluar la necesidad de alertas automáticas."
            ]
        },
        {
            "id": "TC-207-002",
            "name": "Validación de conexión exitosa con certificado no actualizado en la aplicación",
            "description": "Verifica que la aplicación se conecta correctamente con el servicio después de la actualización del certificado en el servicio de almacenamiento (Certificate Manager, Secrets Manager o Parameter Storage) y la APP no fue actualizada.",
            "preconditions": [
                "La aplicación está instalada y NO fue actualizada.",
                "El certificado ha sido actualizado en el servicio de almacenamiento.",
                "La aplicación se reinicia o se forza el cierre y se vuelve a abrir."
            ],
            "gherking": {
                "given": "La aplicación está instalada y NO fue actualizada. El certificado ha sido actualizado en el servicio de almacenamiento",
                "when": "El usuario abre la aplicación e intenta autenticarse",
                "then": "La autenticación es exitosa",
                "and": "El usuario puede acceder a las funcionalidades de la aplicación sin errores de conexión"
            },
            "expected_result": "La aplicación se autentica correctamente y funciona sin errores de conexión.",
            "priority": "High",
            "type": "Functional",
            "recomendations": [
                "Automatizar este caso de prueba para asegurar la validación en cada release.",
                "Monitorear la frecuencia con la que se actualizan los certificados y evaluar la necesidad de alertas automáticas."
            ]
        },
        {
            "id": "TC-207-003",
            "name": "Manejo de error en caso de fallo en la validación del certificado",
            "description": "Verifica que la aplicación muestra un mensaje de error amigable si falla la validación del certificado, y no expone información sensible.",
            "preconditions": [
                "La aplicación está instalada y funcional.",
                "El servicio de almacenamiento de certificados no está disponible o el certificado es inválido."
            ],
            "gherking": {
                "given": "La aplicación está instalada y el servicio de almacenamiento de certificados no está disponible",
                "when": "El usuario abre la aplicación e intenta autenticarse",
                "then": "La aplicación muestra un mensaje de error genérico y amigable al usuario, indicando un problema de conexión.",
                "and": "La aplicación no expone detalles técnicos del error (por ejemplo, la causa específica del fallo de validación del certificado)."
            },
            "expected_result": "La aplicación muestra un mensaje de error amigable y no expone información sensible.",
            "priority": "High",
            "type": "Security",
            "recomendations": [
                "Considerar la implementación de un mecanismo de reintento con backoff exponencial en caso de fallo temporal del servicio de almacenamiento de certificados.",
                "Implementar monitoreo para detectar fallos persistentes en el servicio de almacenamiento de certificados."
            ]
        },
        {
            "id": "TC-207-004",
            "name": "Validación del rendimiento en la autenticación con la validación del certificado",
            "description": "Verifica que el tiempo de autenticación con la nueva validación del certificado no impacta negativamente la experiencia del usuario.",
            "preconditions": [
                "La aplicación está instalada y funcional.",
                "Se tiene acceso a un entorno de pruebas con condiciones de red similares al entorno de producción."
            ],
            "gherking": {
                "given": "La aplicación está instalada y se ha implementado la validación del certificado",
                "when": "El usuario abre la aplicación e intenta autenticarse",
                "then": "El tiempo de autenticación es similar al tiempo de autenticación previo a la implementación de la validación del certificado",
                "and": "El tiempo de autenticación no excede un umbral predefinido (por ejemplo, 3 segundos)."
            },
            "expected_result": "El tiempo de autenticación no se ve afectado negativamente y se mantiene dentro de los parámetros aceptables.",
            "priority": "Medium",
            "type": "Performance",
            "recomendations": [
                "Realizar pruebas de carga para validar el rendimiento en condiciones de alta demanda.",
                "Optimizar el código de la validación del certificado para minimizar el impacto en el rendimiento."
            ]
        },
        {
            "id": "TC-207-005",
            "name": "Validación de cambio de certificado sin actualización de la APP",
            "description": "Se valida que al cambiar el certificado en el servicio de almacenamiento, la APP sigue funcionando sin necesidad de actualización.",
            "preconditions": [
                "La aplicación está instalada y funcional.",
                "El certificado ha sido cambiado en el servicio de almacenamiento.",
                "La aplicación se reinicia o se forza el cierre y se vuelve a abrir."
            ],
            "gherking": {
                "given": "La aplicación está instalada y se ha cambiado el certificado en el servicio de almacenamiento",
                "when": "El usuario abre la aplicación e intenta autenticarse",
                "then": "La aplicación se autentica correctamente",
                "and": "El usuario puede acceder a las funcionalidades de la aplicación sin errores de conexión, sin necesidad de actualizar la aplicación."
            },
            "expected_result": "La aplicación se autentica correctamente y funciona sin errores de conexión, sin necesidad de actualización.",
            "priority": "High",
            "type": "Functional",
            "recomendations": [
                "Automatizar este caso de prueba para asegurar la validación en cada release.",
                "Monitorear la frecuencia con la que se actualizan los certificados y evaluar la necesidad de alertas automáticas."
            ]
        },
        {
            "id": "TC-207-006",
            "name": "Validación de la configuración del servicio de almacenamiento de certificados",
            "description": "Verifica que la configuración del servicio de almacenamiento de certificados (Certificate Manager, Secrets Manager, Parameter Store) es correcta y segura.",
            "preconditions": [
                "El servicio de almacenamiento de certificados está configurado correctamente.",
                "La aplicación tiene los permisos necesarios para acceder al servicio."
            ],
            "gherking": {
                "given": "El servicio de almacenamiento de certificados está configurado correctamente y la aplicación tiene los permisos necesarios",
                "when": "La aplicación intenta obtener el certificado",
                "then": "La aplicación obtiene el certificado correctamente",
                "and": "La aplicación utiliza el certificado para establecer una conexión segura."
            },
            "expected_result": "La aplicación obtiene el certificado correctamente y establece una conexión segura.",
            "priority": "High",
            "type": "Security",
            "recomendations": [
                "Revisar periódicamente la configuración del servicio de almacenamiento de certificados para asegurar que cumple con las mejores prácticas de seguridad.",
                "Utilizar el principio de mínimo privilegio al otorgar permisos a la aplicación."
            ]
        }
    ],
    request: {
        description: '',
        criteriaList: []
    }
}

export const apiSlice = createSlice({
    name: 'apiIA',
    initialState,
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setResponse(state, action) {
            state.response = action.payload;
        },
        setAuthenticated(state, action) {
            state.isAuthenticated = true;
            state.apiKey = action.payload.key
        },
        clearMessageStatus(state) {
            state.status = { code: null, message: null }
        },
        addCriteria(state, action) {
            state.request.criteriaList = [...state.request.criteriaList, action.payload];
        },
        removeCriteria(state, action) {
            state.request.criteriaList = state.request.criteriaList.filter((_, index) => index !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                apiService.endpoints.getData.matchPending,
                (state) => {
                    state.isLoading = true;
                    state.response = []
                }
            )
            .addMatcher(
                apiService.endpoints.getData.matchFulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.response = action.payload.data || []
                }
            )
            .addMatcher(
                apiService.endpoints.getIsValidApiKey.matchPending,
                (state) => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                apiService.endpoints.getIsValidApiKey.matchFulfilled,
                (state, action) => {
                    const key = action.meta.arg.originalArgs.key;
                    state.isLoading = false;
                    state.isAuthenticated = true;
                    state.apiKey = key;
                    localStorage.setItem('apiKey', key)
                }
            )
            .addMatcher(
                apiService.endpoints.getIsValidApiKey.matchRejected,
                (state, action: any) => {
                    const error = action.payload?.data.error;
                    state.isLoading = false;
                    state.status = {
                        code: error.code,
                        message: error.details[0].reason
                    }
                }
            )
    }
});
export const {
    setLoading,
    setResponse,
    clearMessageStatus,
    setAuthenticated,
    addCriteria,
    removeCriteria
} = apiSlice.actions;
export const {
    useLazyGetDataQuery,
    useLazyGetIsValidApiKeyQuery
} = apiService;
export default apiSlice.reducer;
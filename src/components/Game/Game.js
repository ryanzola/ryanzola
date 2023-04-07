import { useEffect } from "react"
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Game({ setClicked, setReady }) {
  useEffect(() => {
    setClicked(true)
    setReady(true)
  })

  const { unityProvider } = useUnityContext({
    loaderUrl: "../marbles/Build/marbles.loader.js",
    dataUrl: "../marbles/Build/marbles.data",
    frameworkUrl: "../marbles/Build/marbles.framework.js",
    codeUrl: "../marbles/Build/marbles.wasm",
  });

  return <Unity unityProvider={unityProvider} style={{ width: 800, height: 600, margin: 'auto', marginTop: '6rem' }} />;
}
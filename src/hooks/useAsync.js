import { useEffect, useState } from "react";

/**
 * Runs an async loader whenever `key` changes.
 * Returns { data, error, loading }. Results from an outdated key are ignored.
 * Pass enabled=false to skip the request (e.g. live API turned off).
 */
export default function useAsync(loader, key, { enabled = true } = {}) {
  const [state, setState] = useState({ key: null, data: undefined, error: null });

  useEffect(() => {
    if (!enabled) return undefined;
    let active = true;
    loader().then(
      (data) => active && setState({ key, data, error: null }),
      (error) => active && setState({ key, data: undefined, error }),
    );
    return () => {
      active = false;
    };
    // The loader is recreated every render; `key` is what identifies the request.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, enabled]);

  const settled = state.key === key;
  return {
    data: settled ? state.data : undefined,
    error: settled ? state.error : null,
    loading: enabled && !settled,
  };
}

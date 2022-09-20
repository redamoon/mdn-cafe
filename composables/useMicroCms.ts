export const useMicroCms = async((path, key) => {
  return await useFetch(() => `https://vue-mdn-corporate.microcms.io/api/v1${path}`)
})

import React, { useEffect, useState } from 'react'
import { helpHttp } from '../helpers/helpHttp'
import Loader from './Loader'
import SongDetails from './SongDetails'
import SongForm from './SongForm'

export const SongSearch = () => {
  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    if (search === null) return
    const fetchData = async () => {
      const { artist, song } = search
      const artitstUrl = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
      const songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`
      setLoading(true)
      const [artitsRes, songRes] = await Promise.all([
        helpHttp().get(artitstUrl),
        helpHttp().get(songUrl)]
      )
      console.log(artitsRes, songRes)
      setBio(artitsRes)
      setLyric(songRes)
      setLoading(false)
    }
    fetchData()
  }, [search])
  const handleSearch = (data) => {
    setSearch(data)
  }
  return (
    <>
      <div>SongSearch</div>
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      <SongDetails search={search} lyric={lyric} bio={bio} />
    </>
  )
}
export default SongSearch

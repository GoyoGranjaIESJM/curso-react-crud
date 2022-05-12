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
      // Ejemplo de busqueda: yes - america / the police - roxanne
      const artisttUrl = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
      const songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`
      setLoading(true)
      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artisttUrl),
        helpHttp().get(songUrl)]
      )
      // console.log(artistRes, songRes)
      setBio(artistRes)
      setLyric(songRes)
      setLoading(false)
    }
    fetchData()
  }, [search])
  const handleSearch = (data) => {
    setSearch(data)
  }
  return (
    <section>
      <div>SongSearch</div>
      <article className='grid-1-3'>
        {loading && <Loader />}
        <SongForm handleSearch={handleSearch} />
        {search && !loading &&
          <SongDetails search={search} lyric={lyric} bio={bio} />}
      </article>
    </section>
  )
}
export default SongSearch

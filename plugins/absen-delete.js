let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`
    delete conn.absen[id]
    m.reply(`Absen dihapus`)
}
handler.help = ['hapusabsen']
handler.tags = ['Absen']
handler.command = /^(delete|hapus)absen$/i
handler.group = true
handler.admin = true
handler.register = false

module.exports = handler

export function getDefaultOrderMessage() {
  return [
    "Halo Hamikho, saya mau order Genshin Impact service.",
    "",
    "Service:",
    "Server:",
    "UID:",
    "Jadwal pengerjaan:",
    "Catatan:",
  ].join("\n");
}

export function getOrderMessage(category, service) {
  return [
    "Halo Hamikho, saya mau order Genshin Impact service.",
    "",
    `Service: ${service.name}`,
    `Category: ${category.name}`,
    `Harga: ${service.price}`,
    "Server:",
    "UID:",
    "Jadwal pengerjaan:",
    "Catatan:",
  ].join("\n");
}

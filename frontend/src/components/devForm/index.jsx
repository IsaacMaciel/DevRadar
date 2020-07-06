import React, { useState, useEffect } from "react";

export default function DevForm({ functionSubmit }) {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await functionSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGithubUsername("");
    setTechs("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username"> Usuário do Github</label>
        <input
          name="github_username"
          id="github_username"
          onChange={(e) => setGithubUsername(e.target.value)}
          required
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs"> Tecnologias </label>
        <input
          name="techs"
          id="techs"
          onChange={(e) => setTechs(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude"> Latitude </label>
          <input
            type="number"
            name="latitude"
            value={latitude}
            id="latitude"
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude"> Longitude </label>
          <input
            type="number"
            name="longitude"
            value={longitude}
            id="longitude"
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
        </div>
      </div>

      <button type="submit">Salvar </button>
    </form>
  );
}

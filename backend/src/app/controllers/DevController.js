import Dev from '../models/Dev';

import github_api from '../../services/github_api';

class DevController {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await github_api.get(`/users/${github_username}`);

      const { name = login, avatar_url, bio } = response.data;

      const techsArray = techs.split(',').map(tech => tech.trim());

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });
    }

    return res.json(dev);
  }
}

export default new DevController();

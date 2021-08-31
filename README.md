# Howto use it
## Installation

docker-compose must be installed
[install insomnia](https://insomnia.rest/download)
make install


## start
make start

## stop
make stop

## test Api
import [insomnia.json](./insomnia.json) into insomnia software

# Challenge

1. Manage sightings

* Create new sightings, including:
    * The exact location (latitude and longitude) of the sighting
    * The time of the sighting
    * The eye-witness's description of the sighting
    * A list of some short tags that are pertinent to the sighting, to the eye-witness, or to the geography (for example: "hill", "dark-brown", "cabbage-patch")
* Read
    * All recorded sightings
    * The details of a single sighting
* Update a recorded sighting by:
    * Changing the location or description
    * Adding or removing some tabs
* Delete a sighting
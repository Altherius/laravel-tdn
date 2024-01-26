# Tournoi des nations

Ce projet permet la gestion du tournoi des nations, un système de classement d'équipes
de football nationales, d'après le système Elo.

## Installation

### Pré-requis

Ce projet utilise [Laravel Sail](https://laravel.com/docs/10.x/sail) et cette installation
suppose donc que Docker est installé sur votre machine.

Ce projet suppose également que vous avez [créé un alias](https://laravel.com/docs/10.x/sail#configuring-a-shell-alias)
afin de simplifier les commandes qui seront utilisées pendant l'installation.

### Procédure

Commencez par cloner le repository depuis Github

```shell
$ git clone git@github.com:Altherius/laravel-tdn.git
```

Lancez ensuite la construction des conteneurs Docker nécessaires au fonctionnement de
l'application.

```shell
 # vendor/bin/sail up -d si aucun alias n'a été créé.
$ sail up -d
```

Une fois les conteneurs démarrés, terminez la préparation de l'application en installant
toutes les dépendances requises et en préparant la base de données.

```shell
$ sail composer install
$ sail npm install
$ sail artisan migrate
$ sail artisan db:seed
```




# Efetuar o primeiro deploy e configurações
> sls deploy

# Deploy de uma function

> sls deploy -f hello

# Invocar uma remote function

> sls invoke -f hello

# Invocar uma function localmente

> sls invoke local -f hello

# Invocar uma function passando um evento

> sls invoke -f hello --path evt.json
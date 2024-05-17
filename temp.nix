# flake.nix
{
  inputs = {
        # ...
#    aagl-gtk-on-nix = import (builtins.fetchTarball "https://github.com/ezKEa/aagl-gtk-on-nix/archive/main.tar.gz");
#    aagl.url = "github:ezKEa/aagl-gtk-on-nix";
#    aagl.inputs.nixpkgs.follows = "nixpkgs"; # Name of nixpkgs input you want to use
     home-manager = {
            url = "github:nix-community/home-manager";
            inputs.nixpkgs.follows = "nixpkgs";
    };
    flake-compat.url = "github:edolstra/flake-compat";
    flake-compat.flake = false;
    nix-software-center.url = "github:snowfallorg/nix-software-center";
    arion.url = "github:hercules-ci/arion";
    arion.inputs.nixpkgs.follows = "nixpkgs";    
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    nix-flatpak.url = "github:gmodena/nix-flatpak"; # unstable branch. Use github:gmodena/nix-flatpak/?ref=<tag> to pin releases.

#    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
#    home-manager.url = "github:nix-community/home-manager/release-23.11";
#    home-manager.inputs.nixpkgs.follows = "nixpkgs";
#    flatpaks.url = "../";
  };
  outputs = inputs@{ self, nixpkgs, arion, home-manager, nix-flatpak, ... }:
    let
      system = "x86_64-linux";
      defaultPackage.x86_64-darwin = home-manager.defaultPackage.x86_64-darwin;
    in
    {
      # hostname = test-system-module
 #     nixosConfigurations.test-system-module = nixpkgs.lib.nixosSystem {
 #       inherit system;
 #       modules = [
 #         flatpaks.nixosModules.nix-flatpak
 #         ./configuration.nix
 #       ];
 #     };
#      arion = {
#        enable = true;
#        defaultPackage = "my-arion-project";
#        packages = {
#          my-arion-project = {
#            entrypoint = "shell.nix";
#          };
#        };
#      };
      # hostname = test-hm-module
      nixosConfigurations = {
        homeConfigurations = {
         "spiderunderurbed" = {
           packages = [
             # Add your desired packages here
            home-manager
            arion
          ];
          configuration = { home-manager, ... }: {
           virtualisation = {
            arion = {
              backend = "docker";
              "revsocks" = {
                settings = {
                   services = {
                        "revsocks".service = {
                            build = {
                                context = "/etc/nixos/revsocks";
#                               target = "prod";
                            };
                            network_mode = "host";
                            command = ["./revsocks" "--connect" "100.71.106.52:8443" "-pass" "Password1234"];
                            restart = "unless-stopped";
                  #ports = ["1055:1055"];  
                #image = "jpillora/chisel";
                  #command = ["client" "0.0.0.0:3060 100.71.106.52:1080/tcp"]; 
                     #Cmd = "echo 'test'";
 };
                  };
                };
              };
           };
          };
          };
         };
        };

#       defaultPackage = daspidercave;

        daspidercave = nixpkgs.lib.nixosSystem {
        
        inherit system;

        modules = [
         ./configuration.nix  
#        ./common.nix
          home-manager.nixosModules.home-manager
          {
#           programs.arion.enable = true;
#               virtualisation = {
 #                  arion = {
#               };#
#           };             
            home-manager.useGlobalPkgs = true;
            home-manager.useUserPackages = true;
            home-manager.extraSpecialArgs.flake-inputs = inputs;
            home-manager.users."spiderunderurbed".imports = [
                nix-flatpak.homeManagerModules.nix-flatpak
                ./flatpak.nix
#               ./arion.nix
              ];
              home-manager.users.spiderunderurbed.home.stateVersion = "23.11";
            }
          ];
        };
      };
    };
}


package com.tastebuds.webapp.Storage;

import com.tastebuds.webapp.resources.Pairing;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PairingStorage {
    private PairingsRepository pairingRepo;

    public PairingStorage(PairingsRepository pairingRepo) {
        this.pairingRepo = pairingRepo;
    }

    public void savePairing(Pairing pairingToSave) {
        pairingRepo.save(pairingToSave);
    }

    public Pairing retrievePairingById(Long id) {
        return pairingRepo.findById(id).get();
    }

    public List<Pairing> retrieveAllPairingsByName(String pairing){
        return pairingRepo.findAllByName(pairing);
    }

    public Pairing retrievePairingByName(String pairing){
        return pairingRepo.findByName(pairing);
    }


}
